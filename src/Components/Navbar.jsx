import React, { useState , useContext} from 'react';
import "../styles/Button.css"
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Dropdown from './Dropdown';
import {verticle_nav} from "./MenuListImg";

// const Verticle_nav = createContext(true);

const Navbar = () => {
  // const [isverticle, setClick] = useState(false);

  const {isverticle,setnav} = useContext(verticle_nav);
  

  const [dropdown, setDropdown] = useState(false);
  
  

  const handleClick = () => setnav(!isverticle);
  const closeMobileMenu = () => setnav(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    
      
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img src="https://fontmeme.com/permalink/201217/d9e1de2faf359bc3706ac186625f3988.png" alt="resize-images" border="0" className="navbar-img"/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={isverticle ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={isverticle ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/categories'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Categories <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/search'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Search
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/mylist'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              My WatchList
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/'
              className='btn loginbtn'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='btn signupbtn'
              onClick={closeMobileMenu}
            >
              Sign up
            </Link>
          </li>
          
          <li >
            <Link
              to='/'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='nav-links-mobile '
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>  
          
        </ul>
        
      </nav>
    
  );
}

export default Navbar;

