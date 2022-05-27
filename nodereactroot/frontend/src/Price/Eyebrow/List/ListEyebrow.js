import React from "react";
import './ListEyebrow.css'
import makeup from '../../../img/eyelash_prais.png'
import {Link} from 'react-router-dom'

function ListEyebrow () {
    return (
        <div className="ListEyebrow">
                <h1 className="ListEyebrow_h1">Прайс-лист</h1>
                <div className="ListEyebrow_main">
                    <div className="ListEyebrow_main_tittle">
                        <h3 className="ListEyebrow_main_h3">Ресницы</h3>
                        <p className="ListEyebrow_main_tittle_p">Какие ресницы мы считаем идеальными? Длинные, эффектно подкрученные, насыщенного темного оттенка. Они делают взгляд «открытым», страстным и манящим.</p>
                        <Link to="/componentscontact"><button className="ListEyebrow_main_button">Заказать звонок</button></Link> 
                    </div>
                    <div className="ListEyebrow_prise">
                        <img src={makeup} className="ListEyebrow_prise_img"/>
                    </div>
                </div>
        </div>
    )
}

export default ListEyebrow;