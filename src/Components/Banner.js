import React, { useState, useEffect} from "react";
import axios from "../axios";
import requests from "../apirequests";
import { Link } from 'react-router-dom';
import "../styles/Banner.css"

const Banner = () =>{
    const [movie,setMovie] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchShwetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);
            return request;
        }
        fetchData();
    },[]);

    const truncate = (str,n) =>{
        return str?.length > n ? str.substr(0, n-1) + "..." : str ; 
    }

    

    return(
        <header className="banner"
          style = {{
              backgroundSize:"cover",
              backgroundImage:`linear-gradient(to right, rgba(0,0,0,0.8),transparent) , url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              
          }}>
           <div className="banner_contents">
               <h1 className="banner_title">{movie.title || movie.name || movie.original_name}</h1>
               <div className="banner_buttons">
                <Link to={'/categories/' }>
                <button className="banner_button">Show Categories</button>
                </Link>
                
                <Link to="/mylist">
                <button className="banner_button">Go to My WatchList</button>
                </Link>
               </div>

               <h1 className="banner_description">{ truncate(movie?.overview,150)  }</h1>
           </div>
           <div className="banner--fadeBottom"/>
        </header>
    );
}

export default Banner;