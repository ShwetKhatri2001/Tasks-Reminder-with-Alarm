const API_KEY = "4aaa8142b7c7fbcd1c9743b9f956a00b";

const apirequests = {
    fetchShwetflixOriginals: `discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchTrending :`/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated/?api_key=${API_KEY}&language=en-US`,

//    genre_list : 
    fetchGenreList :`/genre/movie/list?api_key=${API_KEY}&language=en-US`,
//    genre_movies :
    fetchGenreMovies: `/discover/movie?api_key=${API_KEY}&with_genres=`,
// moviedetails : 
    fetchmoviedetails : `?api_key=${API_KEY}&language=en_US`,
// searchmovie : 
    fetchSearchMovies : `/search/movie?&api_key=${API_KEY}&query=`


    // fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    // fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    // fetchAdventureMovies:`/discover/movie?api_key=${API_KEY}&with_genres=12`,
    // fetchAnimationMovies:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    // fetchCrimeMovies:`/discover/movie?api_key=${API_KEY}&with_genres=80`,
    // fetchDramaMovies:`/discover/movie?api_key=${API_KEY}&with_genres=18`,
    // fetchFamilyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    // fetchFantacyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=14`,
    // fetchHistoryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=36`,
    // fetchMusicMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10402`,
    // fetchMystryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    // fetchScienceFictionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    // fetchThrillerMovies:`/discover/movie?api_key=${API_KEY}&with_genres=53`,
    // fetchWarMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    // fetchWesternMovies:`/discover/movie?api_key=${API_KEY}&with_genres=37`,




}

export default apirequests;