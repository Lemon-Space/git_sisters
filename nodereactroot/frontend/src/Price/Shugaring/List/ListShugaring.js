import React from "react";
import './ListShugaring.css'
import makeup from '../../../img/shugaring_prais.png'
import {Link} from 'react-router-dom'

function ListShugaring () {
    return (
        <div className="ListShugaring">
                <h1 className="ListShugaring_h1">Прайс-лист</h1>
                <div className="ListShugaring_main">
                    <div className="ListShugaring_main_tittle">
                        <h3 className="ListShugaring_main_h3">Шугаринг</h3>
                        <p className="ListShugaring_main_tittle_p">Почувствовать уверенность в себе и на некоторое время забыть об удалении волос и призвана процедура депиляции.</p>
                        <Link to="/componentscontact"><button className="ListShugaring_main_button">Заказать звонок</button></Link> 
                    </div>
                    <div className="ListShugaring_prise">
                        <img src={makeup} className="ListShugaring_prise_img"/>
                    </div>
                </div>
        </div>
    )
}

export default ListShugaring;