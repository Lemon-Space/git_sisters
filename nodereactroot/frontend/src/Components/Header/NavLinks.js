import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const NavLinks = () => {
  return (
    <div className='NavLinks'>
                          
         <div className="menu_items" ><Link to="/" className="menu_link">Главная</Link></div>
         <div className="menu_items" ><Link to="/componentsservice" className="menu_link"> Услуги </Link></div>
         <div className="menu_items" ><Link to="/education" className="menu_link"> Обучение</Link></div>
         <div className="menu_items" ><Link to="/componentscontact" className="menu_link">Контакты</Link></div>

    </div>
  )
}

export default NavLinks