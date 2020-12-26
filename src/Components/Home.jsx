import React from 'react';
import Banner from "./Banner";
import Row from "./Row";
import RowsOnHome from "./RowsOnHome"
import apirequests from "../apirequests";

const Home = () =>{

    return(
        <>
        <Banner/>
       <Row title="SHWETFLIX ORIGINALS" fetchURL={apirequests.fetchShwetflixOriginals} key='0' genreid="0"isLargeRow/>
       <Row title="Trending Now" fetchURL={apirequests.fetchTrending} key='1' genreid="1" />
       <Row title="Top Rated" fetchURL={apirequests.fetchTopRated} key='2' genreid="2"/>
       <RowsOnHome/>
    
        </>
    )
}

export default Home;