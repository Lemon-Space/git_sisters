import React from "react";
import './Header.css'
import SistersLogo from '../../img/Logowight.svg'
import Num_logo from '../../img/Num_logo.png'
import Instagram from '../../img/insta.svg'
import Wk from '../../img/wk.svg'
import Whatsapp from '../../img/whatsapp.svg'
import Telega from '../../img/telegra.svg'
import ham from '../../img/ham.png'


import {Link} from 'react-router-dom'



function Header ()  {
    return(
        

        
        <div className="Header">
                <div className="Logoheader__conteiner">
                    <img className="SisterLogo" src={SistersLogo}/>
                    <h3 className="h3header">Sisters B.K.</h3>
                </div>
                <nav className="header_tittle">
                    
                       
                        <div className="menu_items" ><Link to="/welcome" className="menu_link">Главная</Link></div>
                        <div className="menu_items" ><Link to="/cource" className="menu_link"> Услуги </Link></div>
                        <div className="menu_items" ><Link to="/education" className="menu_link"> Обучение</Link></div>
                        <div className="menu_items" ><Link to="/contact" className="menu_link">Контакты</Link></div>

                    
                </nav>
                 
                <div className="header_number">
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
                  
                </div>
                <button className="hamburger">
                    <img className="hamburger_img" src={ham}/>
                </button>
        </div>
        
    );
}

export default Header;