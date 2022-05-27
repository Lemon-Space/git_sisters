import React from 'react';
import './List.css';

import shugaring from '../../../img/shugaring.jpg'

function List() {
  return (
    <div className="List">
       <div className='Flax'>
           <h1 className='flax_h1'>ШУГАРИНГ</h1>
       </div>
       <div className='flax_main'>
           <div className='flax_photo'>
                <img src={shugaring} className='flax_main_img'/>
           </div>
           <div className='flax_tiitle'>
                <h3 className='flax_h3'>ШУГАРИНГ - самый безопасный и эффективный метод удаления волос на теле. Особенно когда процедуры проводится на проверенных профессиональных материалах, таких как EcoProfi🌿❤️Осознать, что база - это только начало твоей учёбы и впереди ещё много курсов предстоит пройти?</h3>
                
           </div>
            

       </div>
       <div className='flax_history'>
            <p className='flax_history_p'>Как показывает практика к этому готовы лишь единицы.
Те кто учились у меня знают, что я строгая и курс не лёгкий.
У меня на базовом курсе много теории и практики. И если теорию можно выучить, то практику нужно пропустить через свое сознание. И желательно сразу начать практиковать. Так как с каждым упущенным днём знания и навыки тают... Не тяни время , учись у лучших и стань частью нашей команды </p>
                </div>
        <div className='shugaring_prise'>
                        <h4 className='flax_prise_h4'>Обучение 5000₽ , сертификат от Ecoprofi</h4>
       </div>
       
    </div>
  );
}

export default List;