import React from 'react';
import "../styles/Navbar.css"

const Footer = () =>{

    return(
        <>
           <div class="footer">
               <footer class="bottom">
                   <div class="cont">
                      <h4 class="p" style={{color: 'whitesmoke'}}>Made&nbsp;With&nbsp;<i class="fa fa-heart"></i>&nbsp; By <span><a href="https://github.com/ShwetKhatri2001/SHWETFLIX---Movie-Web" target="blank">Shwet Khatri</a></span> </h4>
                      <h4><a href="https://www.linkedin.com/in/shwet-khatri-4ab216196/" target="blank"><i class="fab fa-linkedin-in"></i></a>
                          <a href="https://github.com/ShwetKhatri2001" target="blank"><i class="fab fa-github"></i></a>
                      </h4>
                      </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;