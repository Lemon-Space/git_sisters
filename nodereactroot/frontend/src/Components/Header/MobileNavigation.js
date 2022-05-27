import React from 'react'
import './Header.css'

import Instagram from '../../img/insta.png'
import Whatsapp from '../../img/whats.png'
import SistersLogo from '../../img/Logowight.svg'
import ham from '../../img/ham.png'
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'
import NavLinks from './NavLinks'

import {useState} from 'react'

const MobileNavigation = () => {

    const [open, setOpen] = useState(false)

    const hamburgerIcon =  <CgMenuRound className="MobileNavigation_img"
                             onClick={()=>setOpen(!open)} />

    const closeIcon =  <CgCloseO className="MobileNavigation_img"
                         onClick={()=>setOpen(!open)} />                         

  return (
    <nav className='MobileNavigation'>
       <img src={SistersLogo} className="Navigation_logo"/>
       {open ? closeIcon : hamburgerIcon}
       {open && <NavLinks/>} 
       <div className="Social_media">
                    <a href="https://www.instagram.com/aura_krasoty_surgut.86/" className="">
                        <img src={Instagram} className="Social_media_logo" />
                    </a>
                    <a href="" className="Social_media_logo_a_whats">
                        <img src={Whatsapp} className="Social_media_logo" />
                    </a>
        </div>
        
    </nav>
  )
}

export default MobileNavigation