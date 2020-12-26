import React, { useState,useEffect} from 'react';
import apirequests from "../apirequests";
import axios from "../axios";
import Row from './Row';


const RowsOnHome = () =>{

     const [genres,setGenres] = useState([]);
     useEffect (()=>{
       async function fetchData() {
           
           const request = await axios.get(apirequests.fetchGenreList);
           setGenres(request.data.genres);
           return request;
       }
       fetchData();
    },[genres]);

    const API_KEY = `4aaa8142b7c7fbcd1c9743b9f956a00b`;
    const selectedgenre = `/discover/movie?api_key=${API_KEY}&with_genres=`
       


    return(
          <>
                       
                         
                             {
                                 genres.map((genre,index) => {
                                     return(
                                     <>
                                     <Row title={genre.name + " Movies"} fetchURL={selectedgenre + genre.id} key={genre.id} genreid={genre.id}/>
                                     </>);
                                 })
                             }
                         
                         
                     
          </>
    );
                    }

export default RowsOnHome;