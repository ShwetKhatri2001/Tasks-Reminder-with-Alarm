import React,{useState,useEffect,useContext} from 'react';
import apirequests from "../apirequests";
import axios from "../axios";
import {Link} from 'react-router-dom';
import { mywatchlist } from "./MenuListImg";


const SearchMovie = () =>{

    const [searchval, setsearchval] = useState('');
    const [matchedmovies,setmatched] = useState([]);
    const {mwl,setmwl} = useContext(mywatchlist);

    useEffect (()=>{
        async function fetchData() {
            const request = await axios.get(`${apirequests.fetchSearchMovies}${searchval}`);
            setmatched(request.data.results);
            return request;
        }
        fetchData();
     },[searchval,matchedmovies]);

     
     const img_baseurl = "https://image.tmdb.org/t/p/original/";
     
    const handleChange = event => {
        setsearchval(event.target.value);
      };

    const handleSubmit = event => {
        
     
        setsearchval('');
     
        event.preventDefault();
      };

    return(
        <>
        <header className="searchheader">
            <form onSubmit={handleSubmit}>
                 <i class="fa fa-search" aria-hidden="true"></i>
                 <input className="searchbox" type="text" placeholder="Search.." name="search" value={searchval} onChange={handleChange}
                     autoComplete="off"
                 />
                
            </form>
        </header>

        <div className="genres_list " >
                    
                             {
                                 matchedmovies.map((movie,index) => {
                                     return(  <>
                                     {(movie.poster_path) ? 
                                      
                                      <div className="genrelink">
                                     <Link to={"/categories/" + movie.genre_ids[0] + "/" + movie.id} className="categorymvinfo">
                                     
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
    )

}

export default SearchMovie;