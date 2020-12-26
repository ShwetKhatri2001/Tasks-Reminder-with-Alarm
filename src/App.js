import React,{useState} from "react";
import "./App.css";
import { Switch, Route , Redirect} from "react-router-dom";
import Categories from "./Components/Categories";
import CategoryMovies from "./Components/CategoryMovies";
import Movieinfo from "./Components/Movieinfo";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Mywatchlist from "./Components/Mywatchlist"
import {mywatchlist,verticle_nav} from "./Components/MenuListImg";
 import SearchMovie from "./Components/SearchMovie";
 import ErrorPage from "./Components/ErrorPage";
 import Footer from "./Components/Footer";




const App = () =>{

  const [mwl,setmwl] = useState([]);
  const [isverticle,setnav] = useState(false);
  return(
    <>
     <div className="App">
      <verticle_nav.Provider value={{isverticle,setnav}}>
      <Navbar/>
      
      <Switch>
      <mywatchlist.Provider value={{mwl,setmwl}}>
      <Route  exact path="/" component={Home}/>
       <Route exact path="/SHWETFLIX---Movie-Web" component={Home}/>
       <Route exact path="/categories" component={Categories}/>
       <Route exact path="/categories/:genreid" component={CategoryMovies} />
       <Route exact path="/categories/:genreid/:movieid" component={Movieinfo}/>
       <Route exact path="/mylist" component={Mywatchlist}/>
       <Route exact path="/search" component={SearchMovie}/>
       <Redirect to="/error"/>
       <Route path="/error" component={ErrorPage}/>
       </mywatchlist.Provider>
       </Switch>
       </verticle_nav.Provider>
     </div>
     <Footer/>
     </>
  )
}

export default App;
