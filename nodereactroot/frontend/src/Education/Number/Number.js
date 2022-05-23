import React from "react";
import './Number.css'
import Telephone_img from '../../img/Tele.png'
import {Link} from 'react-router-dom'


function Number ()  {
    return(
        <div className="Number">
             <div className="number_text">
                <div className="number_tittle">
                    <span className="number_tittle_span1">Звоните по номеру +7 (932) 257-87-27</span><br/>
                    <span className="number_tittle_span2">...или закажите звонок</span>
                </div>
                <Link to="/componentscontact">   <button className="number_button"> заказать звонок!</button></Link>
            </div>
           
            <img src={Telephone_img} className="number_img" />
       </div>         
    );
}

export default Number;