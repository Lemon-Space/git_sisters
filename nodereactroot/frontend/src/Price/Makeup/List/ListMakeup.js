import React from "react";
import './ListMakeup.css'
import makeup from '../../../img/mekeup_prais.png'
import {Link} from 'react-router-dom'

function ListMakeup () {
    return (
        <div className="ListMakeup">
                <h1 className="ListMakeup_h1">Прайс-лист</h1>
                <div className="ListMakeup_main">
                    <div className="ListMakeup_main_tittle">
                        <h3 className="ListMakeup_main_h3">Make Up</h3>
                        <p className="ListMakeup_main_tittle_p">Когда у вас близится выступление, день рождение, фотосессия или свадьба, то наши опытные визажисты помогут вам выглядеть безупречно.</p>
                        <Link to="/componentscontact"><button className="ListMakeup_main_button">Заказать звонок</button></Link> 
                    </div>
                    <div className="ListMakeup_prise">
                        <img src={makeup} className="ListMakeup_prise_img"/>
                    </div>
                </div>
        </div>
    )
}

export default ListMakeup;