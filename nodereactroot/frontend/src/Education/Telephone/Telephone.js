import React from "react";
import './Telephone.css'
import Telephone_img from '../../img/Tele.png'
import Strelka from '../../img/pngwing.com.png'


function Telephone ()  {
    return(
        <div className="Telephone">
            <div className="telephone_text">
                <div className="telephone_tittle">
                    <span>Закажите звонок и получите бесплатную<br/> консультацию!</span>
                </div>
                <button className="telephone_button"> заказать звонок!</button>
            </div>
            <img className="Strelka"src={Strelka} />
            <img src={Telephone_img} className="telephone_img" />
                
        </div>
    );
}

export default Telephone;