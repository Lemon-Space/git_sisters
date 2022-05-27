import React from "react";
import './ListMassage.css'
import makeup from '../../../img/massage_prais.png'
import {Link} from 'react-router-dom'

function ListMassage () {
    return (
        <div className="ListMassage">
                <h1 className="ListMassage_h1">Прайс-лист</h1>
                <div className="ListMassage_main">
                    <div className="ListMassage_main_tittle">
                        <h3 className="ListMassage_main_h3">Массаж</h3>
                        <p className="ListMassage_main_tittle_p">В салоне красоты «Sisters B.K.» представлены самые популярные виды ручного массажа: классический общий массаж, массаж рук, ног и головы, медовый.</p>
                        <Link to="/componentscontact"><button className="ListMassage_main_button">Заказать звонок</button></Link> 
                    </div>
                    <div className="ListMassage_prise">
                        <img src={makeup} className="ListMassage_prise_img"/>
                    </div>
                </div>
        </div>
    )
}

export default ListMassage;