import React from "react";
import './Header.css'
import SistersLogo from '../../img/Logowight.svg'
import Num_logo from '../../img/Num_logo.png'
import Instagram from '../../img/insta.svg'
import Wk from '../../img/wk.svg'
import Whatsapp from '../../img/whatsapp.svg'
import Telega from '../../img/telegra.svg'
import ham from '../../img/ham.png'

import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'





function Header ()  {
    return(
        
          <div className="Header">
                
                <Navigation/>
                <MobileNavigation/>
               
        </div>
        
    );
}

export default Header;

 {/* <div className="header_number">
                    <img src={Num_logo} className="header_number_logo"/>
                    <div className="header_number_number">+7 (932) 257-87-27</div> 
                </div>
                <div className="Social_media">

                    <a href="https://www.instagram.com/aura_krasoty_surgut.86/" className="">
                        <img src={Instagram} className="Social_media_logo" />
                    </a>
                    <a href="" className="Social_media_logo_a_whats">
                        <img src={Whatsapp} className="Social_media_logo" />
                    </a>
                    {/* <a href="" className="">
                        <img src={Wk} className="Social_media_logo" />
                    </a>
                    
                    <a href="" className="">
                        <img src={Telega} className="Social_media_logo" />
                    </a> */}
                  
                {/* </div> */}
                {/* <button className="hamburger">
                    <img className="hamburger_img" src={ham}/>
                </button> */}