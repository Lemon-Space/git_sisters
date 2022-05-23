import React from "react";
import './Catalog.css'

import Nogot from '../../img/pexel.png'
import Lash from '../../img/lash.png'
import Hair from '../../img/hair.png'
import Cosmetice from '../../img/cosmetice.png'
import legs from '../../img/legs.png'
import brovist from '../../img/brovist.jpg'

import {Link } from 'react-router-dom'
function Catalog () {
    return(
        <div className="Catalog" id="Catalog_scroll">
                <h1 className="Catalog_h1">Каталог курсов</h1>
            <div>
                <div className="catalog_menu">
                    <div className="catalog_menu_div">
                        <img src={Nogot} className="catalog_menu_div_img"/>
                    </div>
                    <div className="catalog_menu_tittle">
                        <h3 className="catalog_menu_tittle_h3">Мастер ногтевого сервиса</h3>
                        
                       <Link className="" to="/manicure" ><button className="catalog_menu_tittle_button">Подробнее...</button></Link> 
                    </div>
                </div>

                <div className="catalog_menu2">
                    
                    <div className="catalog_menu_tittle2">
                        <h3 className="catalog_menu_tittle_h3">Lash мастер</h3>
                        
                     <Link className="" to="/flaxlashes"> <button className="catalog_menu_tittle_button2">Подробнее...</button></Link>  
                    </div>
                    <div className="catalog_menu_div2">
                        <img src={Lash} className="catalog_menu_div_img2"/>
                    </div>
                </div>
                <div className="catalog_menu">
                    <div className="catalog_menu_div">
                        <img src={Hair} className="catalog_menu_div_img"/>
                    </div>
                    <div className="catalog_menu_tittle">
                        <h3 className="catalog_menu_tittle_h3">Hair мастер</h3>
                        
                        <Link className="" to="/hair"> <button className="catalog_menu_tittle_button">Подробнее...</button></Link>  
                    </div>
                </div>

                <div className="catalog_menu2">
                    
                    <div className="catalog_menu_tittle2">
                        <h3 className="catalog_menu_tittle_h3">Косметолог - эстетист</h3>
                        
                        <Link className="" to="/cosmo"><button className="catalog_menu_tittle_button2">Подробнее...</button></Link>   
                    </div>
                    <div className="catalog_menu_div2">
                        <img src={Cosmetice} className="catalog_menu_div_img2"/>
                    </div>
                </div>
                <div className="catalog_menu">
                    <div className="catalog_menu_div">
                        <img src={legs} className="catalog_menu_div_img"/>
                    </div>
                    <div className="catalog_menu_tittle">
                        <h3 className="catalog_menu_tittle_h3">Мастер шугаринга</h3>
                        
                        <Link className="" to="/shugaring"><button className="catalog_menu_tittle_button">Подробнее...</button></Link>  
                    </div>
                </div>
                
                {/* <div className="catalog_menu2">
                    
                    <div className="catalog_menu_tittle2">
                        <h3 className="catalog_menu_tittle_h3">Мастер бровист</h3>
                        <h5 className="catalog_menu_tittle_h5">от 9999 р. </h5>
                        <button className="catalog_menu_tittle_button2">Подробнее...</button>
                    </div>
                    <div className="catalog_menu_div2">
                        <img src={brovist} className="catalog_menu_div_img3"/>
                    </div>
                </div> */}
            </div>
            
               
        </div>
    )
}

export default Catalog ; 