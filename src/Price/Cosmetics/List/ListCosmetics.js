import React from "react";
import './ListCosmetics.css'
import makeup from '../../../img/cosmetic_prise.png'

import {Link} from 'react-router-dom'

function ListCosmetics () {
    return (
        <div className="ListCosmetics">
                <h1 className="ListCosmetics_h1">Прайс-лист</h1>
                <div className="ListCosmetics_main">
                    <div className="ListCosmetics_main_tittle">
                        <h3 className="ListCosmetics_main_h3">Косметология</h3>
                        <p className="ListCosmetics_main_tittle_p">Выглядеть ухоженно в любом возрасте – то чего желает каждая девушка и не только.</p>
                    <Link to="/componentscontact"><button className="ListCosmetics_main_button">Заказать звонок</button></Link>    
                    </div>
                    <div className="ListCosmetics_prise">
                        <img src={makeup} className="ListCosmetics_prise_img"/>
                    </div>
                </div>
        </div>
    )
}

export default ListCosmetics;