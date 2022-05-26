import axios from 'axios';

import React from 'react'
import './Maps.css'
import { YMaps, Map, Placemark } from 'react-yandex-maps';

 export default class Maps extends React.Component {

    state = {
        firstName : '',
        lastName : '',
        phone : '',
        email : '',
        description : ''

    }
    fnChange = event => {
        this.setState({ firstName: event.target.value });
      }
      lnChange = event => {
        this.setState({lastName: event.target.value});
      }
      phChange = event => {
        this.setState({phone: event.target.value});
      }
      emChange = event => {
        this.setState({email: event.target.value});
      }
      desChange = event => {
        this.setState({description: event.target.value});
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const person = {
          firstName : this.state.firstName,
            lastName : this.state.lastName,
            phone : this.state.phone,
            email : this.state.email,
            description : this.state.description
        };
    
        axios.post(`http://localhost:5000/api/person`, { person })
          .then(res => {
          })
      }


    render(){
     return(
        
       

         <div className="Maps">
             <div className="write" id="spy={true}
    smooth={true}
    offset={-70}
    duration={500}">
        <h3 className="write_h3">Напишите нам!</h3>
        <form className="Write_div" onSubmit={this.handleSubmit}>
          
            <input placeholder='Имя' className='write_name' type="text" firstName="firstName" onChange={this.fnChange} />
          
          
            <input placeholder='Фамилия' className='write_name'type="text" lastName="lastName" onChange={this.lnChange} />
          
          
            <input placeholder='Телефон' className='write_number'type="text" phone='phone' onChange={this.phChange} />
          
          
            <input placeholder='email' className='write_mail'type="text" lastName="email" onChange={this.emChange} />
          
          
            <input placeholder='Коментарий' className='write_massage'type="text" lastName="description" onChange={this.desChange} />
          
          <button className='write_button' type="submit">Отправить</button>
        </form>
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
}