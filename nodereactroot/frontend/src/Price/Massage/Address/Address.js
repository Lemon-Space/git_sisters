import React from "react";
import './Address.css'
import Home from '../../img/home (1) 1.png'
import Telephone from '../../img/telephone 1.png'
import Oclock from '../../img/clock 1.png'


function Address () {
    return(
        <div className="Address">
                <div className="Address_block1">
                    <div className="Address_block1-div"> 
                        <img src={Home} className="Address_block1_img" />
                        <h3 className="Address_block1-div_h3">Адрес</h3>
                        <div className="Address_block1-div_address">г.Сургут <br/> ул.Островского 22</div>
                    </div>
                   
                </div>
                <div className="Address_block2">
                    <div className="Address_block2_div">
                         <img src={Telephone} className="Address_block2_img" />
                         <h3 className="Address_block2-div_h3">Телефоны</h3>
                        <div className="Address_block2-div_address">+7 (932) 257-87-27 <br/>+7 (922) 650-18-52</div>
                    </div>
                </div>
                <div className="Address_block3">
                    <div className="Address_block3_div">
                        <img src={Oclock} className="Address_block3_img" />
                        <h3 className="Address_block3-div_h3">График работы</h3>
                        <div className="Address_block3-div_address"> с 9:00 до 20:00<br/>Работаем без выходных</div>
                    </div>
                    
                </div>

        </div>

    );
}

export default Address;