import React from "react";
import './ListHairwomen.css'
import makeup from '../../../img/hairwom_prais.png'
import {Link} from 'react-router-dom'

function ListHairwomen () {
    return (
        <div className="ListHairwomen">
                <h1 className="ListHairwomen_h1">Прайс-лист</h1>
                <div className="ListHairwomen_main">
                    <div className="ListHairwomen_main_tittle">
                        <h3 className="ListHairwomen_main_h3">Парикмахер стилист</h3>
                        <p className="ListHairwomen_main_tittle_p">Просто поддерживать текущий образ и внешний вид - обязательная задача успешной и красивой, а главное - современной женщины.</p>
                        <Link to="/componentscontact"><button className="ListHairwomen_main_button">Заказать звонок</button></Link> 
                    </div>
                    <div className="ListHairwomen_prise">
                        <img src={makeup} className="ListHairwomen_prise_img"/>
                    </div>
                </div>
        </div>
    )
}

export default ListHairwomen;