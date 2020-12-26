
import React, { useState,useEffect} from 'react';
import apirequests from "../apirequests";
import axios from "../axios";
import "../styles/Categories.css";
import { Link } from 'react-router-dom';
import {CategoryImages} from "./MenuListImg"
 


const Category = () =>{

     const [genres,setGenres] = useState([]);
     useEffect (()=>{
       async function fetchData() {
           const request = await axios.get(apirequests.fetchGenreList);
           setGenres(request.data.genres);
           return request;
       }
       fetchData();
    },[genres]);



    return(
          <>
                        
                         <div className="genres_list ">
                             {
                                 genres.map((genre,index) => {
                                     return(
                                     <>
                                     <Link to={"/categories/" + genre.id} className="genrelink " >
                                     <div className="genre_li">
                                         <img className="genre_img" src={CategoryImages[index].img}alt={genre.name}/>
                                     </div>
                                     <div className="genre_info">
                                         <h3 className="genre_title">{genre.name}</h3>
                                     </div>
                                     </Link>
                                     </>);
                                 })
                             }
                         
                         </div>
                     
          </>
    );
                    }

export default Category;