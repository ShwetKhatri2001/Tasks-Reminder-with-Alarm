import React, { useContext} from "react";
import {Link} from "react-router-dom";
import { mywatchlist} from "./MenuListImg";

const Mywatchlist = () => {

    const {mwl,setmwl} = useContext(mywatchlist);
    
    const genreid=80;
    const img_baseurl = "https://image.tmdb.org/t/p/original/";
    return(
        <>
           {
             (mwl.length === 0 ) ? <><h2 className="emptylist1">Your WatchList is Empty 😌 </h2><h2 className="emptylist2"> Add Some Exciting Movies 😉</h2></>
             :
            <div className="genres_list ">
                             {
                                 mwl.map((movie) => {
                                     return(
                                     
                                     <div className="genrelink">
                                     {(movie.poster_path) ? 
                                        <>
                                     <Link to={"/categories/" + genreid+ "/" + movie.id} className="categorymvinfo" >
                                     
                                     <div className="genre_li">
                                         <img className="genre_img" src={`${img_baseurl}${movie.poster_path}`}
                                         alt={movie.title || movie.name || movie.original_name}/>
                                     </div>
                                     <div className="genre_info large_info">
                                         <h3 className="genremovie_title">{movie.title || movie.name || movie.original_name}</h3>
                                         <span className="rating">{movie.vote_average} <i class="fas fa-star star" ></i></span>
                                     </div>
                                     
                                     </Link>
                                     <div className="watchlistbtn" onClick={()=> {setmwl((prevValue) => {
                                                                              return prevValue.filter((obj) => {
                                                                                       return obj.id !== movie.id;
                                                                                                 });
                                                                                                      }); }}>
                                         <h4><i class="fa fa-minus" aria-hidden="true"></i>My WatchList</h4>
                                     </div>
                                     </>
                                     : null }
                                     
                                     </div>);
                                 })
                             }
                         
                         </div>
          
           }

        </>
    );
}

export default Mywatchlist;