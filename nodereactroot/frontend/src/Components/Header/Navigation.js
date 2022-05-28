import React from 'react'
import './Header.css'

import Instagram from '../../img/insta.png'
import Whatsapp from '../../img/whats.png'
import SistersLogo from '../../img/Logowight.svg'
import Num_logo from '../../img/Num_logo.png'
import NavLinks from './NavLinks'

const Navigation = () => {
  return (
    <nav className='Navigation'>
        <img src={SistersLogo} className="Navigation_logo"/>
        <div className='Navigation_div'>
          <NavLinks/>
        </div>
        
        <div className='Navigation_number'>
            <img src={Num_logo} className="Navigation_number_logo"/>
            <div className="Navigation_number_number">+7 (932) 257-87-27</div> 
        </div>
        <div className="Social_media">
                    <a href="https://www.instagram.com/aura_krasoty_surgut.86/" className="">
                        <img src={Instagram} className="Social_media_logo" />
                    </a>
                    <a href="" className="">
                        <img src={Whatsapp} className="Social_media_logo" />
                    </a>
        </div>
        
    </nav>
  )
}

export default Navigation