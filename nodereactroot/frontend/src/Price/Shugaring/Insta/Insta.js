import React from "react";
import './Insta.css'
// import Sister_logo from '../../img/logo_sisters.png'
import Isnta_link from '../../img/insta-free.svg'
import insta_telephone_img from '../../img/free-png4.png'
import instag from '../../img/instagramm.png'
import Vector from '../../img/Group 11.png'


function Insta ()  {
    return(
        <div className="Insta">
            <div className="insta_main">
                <h2 className="insta_h2">Переходите к нам в INSTAGRAM</h2>
                <div className="insta_tittle_button">
                    <div className="insta_tittle">
                        Там мы показываем самые<br/>яркие моменты жизни<br/> нашего салона красоты и<br/> делимся новостями в<br/> сфере Nail и Beauty
                    </div>
                    <div>
                    <a className="insta_button_a" href="https://www.instagram.com/aura_krasoty_surgut.86/">
                    <button className="insta_button">
                        <img className="insta_button_img" src={Isnta_link} />
                         
                        aura_krasoty_surgut.86
                        
                          
                     </button>
                    </a>
                     </div>
                </div>
                
                {/* <div className="insta_discount">
                   <span className="span">Подпишись на наш инстаграм и получи  на все beauty услуги cкидку на 5%</span> 
                </div> */}
            </div>
                
                
        <div className="insta_telephone">
            <img src={instag}  className="insta_telephone_list"/>
            <img className="insta_telephone_img" src={insta_telephone_img} />
        </div>

                
                
                {/* <img className="insta_img" src={Sister_logo} /> */}
                
                
        </div>
    );
}

export default Insta;