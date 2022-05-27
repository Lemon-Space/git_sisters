import React from "react";
import './Logo.css'
import Red_Logo from '../../img/mainlogo.jpg'


function Logo ()  {
    return(
        <div className="Logo">
                <img className="Logo_red" src={Red_Logo}/>
        </div>
    );
}

export default Logo;