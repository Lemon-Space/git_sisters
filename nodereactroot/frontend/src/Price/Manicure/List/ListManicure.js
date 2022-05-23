import React from "react";
import './ListManicure.css'
import makeup from '../../../img/manicure_prise.png'
import {Link} from 'react-router-dom'

function ListManicure () {
    return (
        <div className="ListManicure">
                <h1 className="ListManicure_h1">Прайс-лист</h1>
                <div className="ListManicure_main">
                    <div className="ListManicure_main_tittle">
                        <h3 className="ListManicure_main_h3">Маникюр</h3>
                        <p className="ListManicure_main_tittle_p">Эти процедуры позволяют чувствовать себя уверенно в любой ситуации. Более того, нейл-дизайн помогает разнообразить образ, сделать его более стильным и актуальным.</p>
                        <Link to="/componentscontact"><button className="ListManicure_main_button">Заказать звонок</button></Link> 
                    </div>
                    <div className="ListManicure_prise">
                        <img src={makeup} className="ListManicure_prise_img"/>
                    </div>
                </div>
        </div>
    )
}

export default ListManicure;