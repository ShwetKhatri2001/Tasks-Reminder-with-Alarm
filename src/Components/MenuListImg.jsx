import { createContext } from "react";
import img1 from "../categoryimages/Action.jpg";
import img2 from "../categoryimages/Adventure.jpg";
import img3 from "../categoryimages/Animation.jpg";
import img4 from "../categoryimages/Comedy.jpg";
import img5 from "../categoryimages/Crime.jpeg";
import img6 from "../categoryimages/Documentry.jpg";
import img7 from "../categoryimages/Drama.jpg";
import img8 from "../categoryimages/Family.jpg";
import img9 from "../categoryimages/Fantacy.jpg";
import img10 from "../categoryimages/History.jpg";
import img11 from "../categoryimages/Horror.jpg";
import img12 from "../categoryimages/Music.jpg";
import img13 from "../categoryimages/Mystry.jpg";
import img14 from "../categoryimages/Romance.jpg";
import img15 from "../categoryimages/Science Fiction.jpg";
import img16 from "../categoryimages/TV Movie.jpg";
import img17 from "../categoryimages/Thriller.jpg";
import img18 from "../categoryimages/War.jpg";
import img19 from "../categoryimages/Western.jpg";




 const MenuItems = [
    {
      title: 'Action',
      path: '/categories/28',
      cName: 'dropdown-link'
    },
    {
      title: 'Comedy',
      path: '/categories/35',
      cName: 'dropdown-link'
    },
    {
      title: 'Thriller',
      path: '/categories/53',
      cName: 'dropdown-link'
    },
    {
      title: 'Romance',
      path: '/categories/10749',
      cName: 'dropdown-link'
    },
    {
        title: 'All Categories',
        path: '/categories',
        cName: 'dropdown-link'
      }
  ];

  const CategoryImages = [
    {
            img:img1   
    },
    {
            img:img2   
    },
    {
            img:img3   
    },
    {
                img:img4   
    },
    {
            img:img5   
    },
    {
            img:img6   
    },
    {
            img:img7   
    },
    {
            img:img8  
    },
    {
            img:img9  
    },
    {
      
      img:img10   
    },
    {
      
      img:img11   
    },
    {
      
      img:img12   
    },
    {
      
      img:img13   
    },
    {
      
      img:img14   
    },
    {
      
      img:img15   
    },
    {
      
      img:img16   
    },
    {
      
      img:img17   
    },
    {
      
      img:img18   
    },
    {
      
      img:img19   
    },
      

  ]

const mywatchlist = createContext(null);
const verticle_nav = createContext(null);


 export default MenuItems;
 export {mywatchlist,CategoryImages,verticle_nav} ; 