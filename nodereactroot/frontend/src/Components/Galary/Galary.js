import React from "react";

import './Galary.css'

import Photo_salonG1 from '../../img/photo_2022-05-02_00-25-49.png'
import Photo_salonG2 from '../../img/photo_2022-05-02_00-25-34.png'
import Photo_salonG3 from '../../img/photo_2022-05-02_00-25-41.png'
import Photo_salonG4 from '../../img/photo_2022-05-02_00-25-59.png'
import Photo_salonG5 from '../../img/photo_2022-05-02_00-25-54.png'
import Photo_salonG6 from '../../img/photo_2022-05-02_00-26-03.png'


function Galary ()  {
    return(
        <div className="Galary__conteiner">
                <h1 className="Galary_salon">Салон красоты премиум класса</h1>
                <div className="Galary_image1">
                    <img  src={Photo_salonG1} className="Galary_items" />
                    <img  src={Photo_salonG2} className="Galary_items" />
                    <img  src={Photo_salonG3} className="Galary_items" />
                </div>
                <div className="Galary_image2">
                    <img  src={Photo_salonG4} className="Galary_items" />
                    <img  src={Photo_salonG5} className="Galary_items" />
                    <img  src={Photo_salonG6} className="Galary_items" />
                </div>
        
        </div>
    );
}

export default Galary;