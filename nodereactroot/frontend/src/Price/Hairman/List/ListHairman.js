import React from "react";
import './ListHairman.css'
import makeup from '../../../img/hairman_prais.png'
import {Link} from 'react-router-dom'

function ListHairman () {
    return (
        <div className="ListHairman">
                <h1 className="ListHairman_h1">Прайс-лист</h1>
                <div className="ListHairman_main">
                    <div className="ListHairman_main_tittle">
                        <h3 className="ListHairman_main_h3">Barber</h3>
                        <p className="ListHairman_main_tittle_p">Барбершоп направлен на работу с мужской аудиторией, здесь клиентам предоставлены максимально комфортные условия для пребывания. </p>
                        <Link to="/componentscontact"><button className="ListHairman_main_button">Заказать звонок</button></Link> 
                    </div>
                    <div className="ListHairman_prise">
                        <img src={makeup} className="ListHairman_prise_img"/>
                    </div>
                </div>
        </div>
    )
}

export default ListHairman;