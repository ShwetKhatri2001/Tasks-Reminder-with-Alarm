import axios from '../axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Row.css"

const img_baseurl = "https://image.tmdb.org/t/p/original/";

const Row = ({title,genreid,fetchURL,isLargeRow}) =>{

    const [movies,setMovies] = useState([]);
  
    useEffect(()=>{
       async function fetchData() {
           
           const request = await axios.get(fetchURL);
           
           setMovies(request.data.results);
           return request;
       }
       fetchData();
     },[fetchURL]);

    const  showmainpage = (genreid,movieid) =>{
        
    }
     

    return(
        <div className={'row'}>
            <h2 className="category_title">{title}</h2>
                <div className={`row_posters`}>
                     {
                         movies.map( movie => (
                             ((isLargeRow && movie.poster_path) || movie.backdrop_path) ?
                        <>
                         <Link to={"/categories/" + movie.genre_ids[0] + "/" + movie.id} className={(isLargeRow) ? 'home_movie lgrowmv' : "home_movie"}>
                         <img 
                             key={movie.id}
                             className={(isLargeRow) ? 'row_posterLarge' : "row_poster"}
                             src={`${img_baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}
                             onClick={showmainpage(genreid,movie.id)}
                             />
                          <div className="homemvinfo">
                          <h5 className="homemvname">{movie.name ||  movie.title  || movie.original_title }</h5>
                          <h5 className="homemvrating">{movie.vote_average}<i class="fas fa-star star" ></i></h5>
                          </div>
                         </Link>
                         </>
                         : null))
                         
                         
                     }
                </div>
        </div>
    )
}

export default Row;