import React, { useState, useEffect,useContext } from 'react';
import { useParams } from "react-router-dom";
import apirequests from "../apirequests";
import YouTube from "react-youtube";
import "../styles/Movieinfo.css"
import "../styles/Banner.css"
import "../styles/Categories.css";
import axios from "../axios";
import { Link } from 'react-router-dom';
import {mywatchlist,verticle_nav} from "./MenuListImg";


const Movieinfo = () => {

  const { movieid } = useParams();
  const {isverticle,setnav} = useContext(verticle_nav);

  let genres = [];
  const [mvdetail, setMVDetail] = useState([]);
  const [videolinkkey, setVideo] = useState("");
  const [casts, setCasts] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  const {mwl,setmwl} = useContext(mywatchlist);

  

  useEffect(() => {
    const fetchAPI = async () => {
       const movieinfo = await axios.get(`/movie/${movieid}${apirequests.fetchmoviedetails}`);
       setMVDetail(movieinfo.data);
      const videourl = await axios.get(`/movie/${movieid}/videos${apirequests.fetchmoviedetails}`);
      if(videourl.data.results.length > 0)
         setVideo(videourl.data.results[0].key);
      const castsinfo = await axios.get(`/movie/${movieid}/credits${apirequests.fetchmoviedetails}`);
       setCasts(castsinfo.data.cast);
      const similarmv = await axios.get(`/movie/${movieid}/similar${apirequests.fetchmoviedetails}`);
      setSimilarMovies(similarmv.data.results);
    };

    fetchAPI();
  }, [movieid, videolinkkey,mvdetail]);

  genres = mvdetail.genres;
  const img_baseurl = "https://image.tmdb.org/t/p/original/";

  const opts = {
    height: "540px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };


  let genresList;
  if (genres) {
    genresList = genres.map((genre, i) => {
      return (
        <li className="list-inline-item" key={i}>
          <button type="button" className="genrebtn">
            {genre.name}
          </button>
        </li>
      );
    });
  }

  const hhmmform = (given_seconds) =>{

    let dateObj = new Date(given_seconds * 1000); 
    let hours = dateObj.getUTCHours(); 
    let minutes = dateObj.getUTCMinutes(); 
    let seconds = dateObj.getSeconds(); 
  
    let timeString = hours.toString().padStart(2, '0') 
                + ':' + minutes.toString().padStart(2, '0') 
                + ':' + seconds.toString().padStart(2, '0'); 

    return timeString;

  }

  

  const castList = casts.map((c, i) => {

    return (
      (c.profile_path) ?
      <div className="castperson" key={i}>
        <img
          className="castimg"
          src={img_baseurl + c.profile_path}
          alt={c.name}></img>
        <p className="castname">{c.name || c.original_name}</p>
        <p style={{ color: "#999" }}>
          {c.character}
        </p>
      </div>
      : null
    );
  });

  
 
  const similarMovieList = similarMovies.map((movie, index) => {

        return(
              <>
          
              {(movie.poster_path) ? 
               <div className="genrelink">
                <Link to={"/categories/" + movie.genre_ids[0] + "/" + movie.id} className="categorymvinfo" >
                
                    <div className="genre_li">
                          <img className="genre_img" src={`${img_baseurl}${movie.poster_path}`}
                                alt={movie.title || movie.name || movie.original_name}/>
                    </div>
                    <div className="genre_info large_info">
                          <h3 className="genremovie_title">{movie.title || movie.name || movie.original_title}</h3>
                          <span className="rating">{movie.vote_average} <i class="fas fa-star star" ></i></span>
                    </div>
                    
                    </Link>
                    <div className="watchlistbtn" id={`addremovelist${index}`} onClick={() => {let found=false;mwl.forEach(obj => {if(obj.id === movie.id){found=true;}})
                                                                             if(found !== true){setmwl([...mwl,movie]);
                                                      
                                                          document.getElementById(`addremovelist${index}`).innerHTML=`<h4>Added to Watchlist Now</h4>`}
                                                          
                                                            else{ 
                                                          document.getElementById(`addremovelist${index}`).innerHTML=`<h4>Added Already</h4>`}}}>
                          <h4><i class="fa fa-plus" aria-hidden="true"></i>My WatchList</h4>
                    </div>
                    </div>
              : null }
              
              
              </>);
  });
                             
  return (
    <>

      <header className="movie_banner "
          style = {{
              backgroundSize:"cover",
              backgroundImage:`linear-gradient(to right, rgba(0,0,0,0.8),transparent) , url("https://image.tmdb.org/t/p/original/${mvdetail?.backdrop_path}")`,
              
          }}>
           <div className="banner_contents">
               <h1 className="banner_title">{mvdetail.original_name || mvdetail.title || mvdetail.name }</h1>
               <div className="banner_buttons">
               <div className="mvrating">{mvdetail.vote_average} <i class="fas fa-star mvstar" ></i></div>
                <button className="banner_button" onClick={() => {setmwl([...mwl,mvdetail]);}}>Add To My WatchList</button>
               </div>

               <h1 className="banner_description small_overview">{mvdetail?.overview }</h1>
           </div>
           <div className="movie_banner--fadeBottom"/>
        </header>

        { (videolinkkey !== "" ) ?
        <>
        <div className={!isverticle ? "ytvideo_wrapper" : "ytvideo_wrappe ytwrapperdisplay"}>
        <YouTube videoId={videolinkkey} opts={opts} className="ytvideo"/>
        </div>
        </>
        : 
        null
        }    
        {(genresList !== null && genresList !== undefined && genresList.length !== 0) ? <>
        <h3 className="genrep">CATEGORIES</h3>
        <ul className="genresList list-inline">{genresList}</ul></>
        : null
        }
        <div className="info">
        {(mvdetail.release_date !== null && mvdetail.release_date !== "") ?
       <div className="infotype">
          <p style={{ color: "#db202c", fontWeight: "bolder" }}>RELEASE DATE</p>
          <p style={{ color: "#f4c10f" }}>{String(mvdetail.release_date).split("-").reverse().join("-")}</p>
        </div>
        : null}
        {(mvdetail.runtime !== 0 && mvdetail.runtime !== "") ? 
        <div className="infotype">
          <p style={{ color: "#db202c", fontWeight: "bolder" }}>MOVIE RUN TIME</p>
          <p style={{ color: "#f4c10f" }}>{hhmmform(mvdetail.runtime * 60)}</p>
        </div> 
         : null}
         {(mvdetail.tagline !== null && mvdetail.tagline !== "") ? 
        <div className="infotype">
          <p style={{ color: "#db202c", fontWeight: "bolder" }}>TAGLINE</p>
          <p style={{ color: "#f4c10f" }}>{mvdetail.tagline}</p>
        </div>
        : null}
        {(mvdetail.homepage !== null && mvdetail.homepage !== "") ?
        <div className="infotype info4">
          <p style={{ color: "#db202c", fontWeight: "bolder" }}>HOMEPAGE</p>
          <a target="shwet" href={mvdetail.homepage} style={{ color: "#f4c10f"}}>{mvdetail.homepage}</a>
        </div>
        : null}
      </div>

      {(castList !== null && castList !== undefined && castList.length !== 0 ) ?<>
      <h3 className="genrep">CAST</h3>
      <div className="castList">{castList}</div> </>: null}
      {(similarMovieList !== null && similarMovieList !== undefined &&  similarMovieList.length !== 0) ?<>
      <h3 className="genrep">SIMILAR MOVIES</h3>
      <div className="genres_list mt_del">{similarMovieList}</div></> : null}
      
    </>
  );

}

export default Movieinfo;