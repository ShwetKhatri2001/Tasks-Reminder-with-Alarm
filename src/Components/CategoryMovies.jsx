import React, { useState,useEffect,useContext} from 'react';
import apirequests from "../apirequests";
import axios from "../axios";
import "../styles/Categories.css";
import { useParams } from "react-router-dom";
import { mywatchlist } from "./MenuListImg";
import { Link } from 'react-router-dom';




const CategoryMovies = () =>{

     const {genreid} = useParams();
     const [genre,setgenre] = useState([]);
     const {mwl,setmwl} = useContext(mywatchlist);
     

     const [genreMovies,setGenreMovies] = useState([]);
     const [genres,setGenres] = useState([]);
     useEffect (()=>{
       async function fetchData() {
           
           const request = await axios.get(`${apirequests.fetchGenreMovies}${genreid}`);
           setGenreMovies(request.data.results);console.log(request);
        //    return request;
           const gen_req = await axios.get(apirequests.fetchGenreList);
           setGenres(gen_req.data.genres);
           setgenre( genres.filter((gen,index) => {            
            return genre.id === genreid
              })
           )
       }
       fetchData();
    },[genreMovies,genreid,genres,genre]);

    const img_baseurl = "https://image.tmdb.org/t/p/original/";


    return(
          <>
                       {
                            <h2 className="categorytitle">{genre}</h2>
                       }
                        
                         <div className="genres_list " >
                    
                             {
                                 genreMovies.map((movie,index) => {
                                     return(
                                        <>
                                    
                                     {(movie.poster_path) ? 
                                        <div className="genrelink">
                                     <Link to={"/categories/" + genreid+ "/" + movie.id} className="categorymvinfo">
                                     
                                     <div className="genre_li">
                                         <img className="genre_img" src={`${img_baseurl}${movie.poster_path}`}
                                         alt={movie.title || movie.name || movie.original_name}/>
                                     </div>
                                     <div className="genre_info large_info">
                                         <h3 className="genremovie_title">{movie.title || movie.name || movie.original_name}</h3>
                                         <span className="rating">{movie.vote_average} <i class="fas fa-star star" ></i></span>
                                     </div>
                                     
                                     
                                     </Link>
                                     {
                                     <div className="watchlistbtn" id={`addremovelist${index}`} onClick={() => {let found=false;mwl.forEach(obj => {if(obj.id === movie.id){found=true;}})
                                                                             if(found !== true){setmwl([...mwl,movie]);
                                                      
                                                          document.getElementById(`addremovelist${index}`).innerHTML=`<h4>Added to Watchlist Now</h4>`}
                                                          
                                                            else{ 
                                                          document.getElementById(`addremovelist${index}`).innerHTML=`<h4>Added Already</h4>`}}}>
                                        <h4 ><i className="fa fa-plus" aria-hidden="true"></i>My WatchList</h4> 
                                     </div>
                                     }
                                     </div>
                                     : null }
                                     </>
                                     
                                     );
                                 })
                             }
                         
                         </div>
                     
          </>
    );
                    }

export default CategoryMovies;