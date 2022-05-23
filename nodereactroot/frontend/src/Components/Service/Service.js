import React from "react";
import './Service.css'
import Makeup from '../../img/make.png'
import Cosmetics from '../../img/cosmo.png'
import Eyelash from '../../img/resnitsa.png.png'
import Manikyur from '../../img/hands.png'
import Hairwom from '../../img/kashtan.png'
import Hairman from '../../img/man.png'
import Massage from '../../img/relax.png'
import Shugaring from '../../img/shuga.png'
import Helper from '../../img/fly.png'

import {Link } from 'react-router-dom'


function Service (props)  {
    return(
        <div className="Service" ref={props.service}>
                <h1 className="Service_h1">
                Наши услуги
                </h1>
                
            <div className="Service_main">
               
                    <Link style={{textDecoration:'none',color:'white'}} to='/makeup' className="Service_menu_blocks">
                        <img src={Makeup} className="Service_menu_img"/>
                        <h5 className="Service_menu_h5">Макияж и брови</h5>

                    </Link>
               
                   

                    <Link style={{textDecoration:'none',color:'white'}} to='/cosmetics' className="Service_menu_blocks">
                        <img src={Cosmetics} className="Service_menu_img"/>
                        <h5 className="Service_menu_h5">Косметология</h5>

                    </Link>
                    <Link style={{textDecoration:'none',color:'white'}} to='/eyelash' className="Service_menu_blocks">
                        <img src={Eyelash} className="Service_menu_img"/>
                        <h5 className="Service_menu_h5">Ресницы</h5>

                    </Link>
            </div>
            <div className="Service_main">
                    <Link style={{textDecoration:'none',color:'white'}} to='/manicureservice' className="Service_menu_blocks">
                        <img src={Manikyur} className="Service_menu_img"/>
                        <h5 className="Service_menu_h5">Маникюр</h5>

                    </Link>

                    <Link style={{textDecoration:'none',color:'white'}} to='/hairwomen' className="Service_menu_blocks">
                        <img src={Hairwom} className="Service_menu_img"/>
                        <h5 className="Service_menu_h5">Hair-стилист</h5>

                    </Link>
                    <Link style={{textDecoration:'none',color:'white'}} to='/barber' className="Service_menu_blocks">
                        <img src={Hairman} className="Service_menu_img"/>
                        <h5 className="Service_menu_h5">Barber</h5>

                    </Link>
            </div>
            <div className="Service_main">
                    <Link style={{textDecoration:'none',color:'white'}} to='/massage' className="Service_menu_blocks">
                        <img src={Massage} className="Service_menu_img"/>
                        <h5 className="Service_menu_h5">Массаж</h5>

                    </Link>

                    <Link style={{textDecoration:'none',color:'white'}} to='/shugaringservice' className="Service_menu_blocks">
                        <img src={Shugaring} className="Service_menu_img"/>
                        <h5 className="Service_menu_h5">Шугаринг</h5>

                    </Link>

                   
                    <Link style={{textDecoration:'none',color:'white'}} to='/education' className="Service_menu_blocks">
                        <img src={Helper} className="Service_menu_img"/>
                        <h5 className="Service_menu_h5">Обучение</h5>

                    </Link>
                      
                    
                    
                    
            </div>

               
        </div>
    );
}

export default Service;