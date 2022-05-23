
import React from 'react'
import './Maps.css'
import { YMaps, Map, Placemark } from 'react-yandex-maps';

 export default function Maps () {

    



     return(

       

         <div className="Maps">
           
                <div className="write" id="spy={true}
    smooth={true}
    offset={-70}
    duration={500}">
                    <h3 className="write_h3">Напишите нам!</h3>
                    <div className="Write_div">
                        <input placeholder='Ваше имя' className='write_name'></input>
                        <input placeholder='Телефон' className='write_number'></input>
                        <input placeholder='E-Mail *' className='write_mail'></input>
                        <input placeholder='Сообщение' className='write_massage'></input>
                        <button className='write_button'>Отправить</button>
                    </div>
                </div>


                <div className='write_gis'>
                <YMaps >
                        
                            <Map  className='map_clever' id="map_map" defaultState={{ center: [ 61.262494,73.401858 ], zoom: 14 }} >
                                <Placemark defaultGeometry={[61.262494,73.401858]} />
                            </Map>
                        
                    </YMaps>
                </div>
                
        
                              
         </div>
     )
 }