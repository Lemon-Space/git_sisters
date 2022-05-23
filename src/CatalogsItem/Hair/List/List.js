import React from 'react';
import './List.css';

import hair from '../../../img/hair.jpg'

function List() {
  return (
    <div className="List_hair">
        <h1 className='hair_h1'>Кератиновое выпрямление и Ботокс для волос</h1>
       <div className='hair_main'>
           <div className='hair_photo'>
                <img className='hair_main_img' src={hair} />
           </div>
           <div className='hair_tittle'>
               <h3 className='hair_h3'>Кератиновое выпрямление — это услуга, направленная на разглаживание, восстановление и укрепление локонов. Благодаря ей волосы превращаются в сверкающее гладкое полотно. Кератиновый состав проникает вглубь волосяного стержня и заполняет собой поврежденные участки. Результат: послушные и блестящие прямые волосы.</h3><br/>
               <h3 className='hair_h3_h3'> Ботокс для волос — это услуга, оздоравливающая и восстанавливающая волосы. </h3><br/>

               <h3 className='hair_prise_h3'>Обучение 10 000₽ Кератиновое выпрямление волос и ботокс волос . Выдаётся сертификат именной</h3>
           </div>
           
       </div>
       
    </div>
  );
}

export default List;