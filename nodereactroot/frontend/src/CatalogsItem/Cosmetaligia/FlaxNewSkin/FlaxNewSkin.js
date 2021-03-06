import React from 'react';
import './FlaxNewSkin.css';

import NewSkin from '../../../img/Skin.jpg'
import Skin2 from '../../../img/Skin2.jpg'
import Skin3 from '../../../img/Skin3.jpg'
import Skin4 from '../../../img/Skin4.jpg'

function FlaxNewSkin() {
  return (
    <div className="FlaxNewSkin">
       <div className='Flax'>
           <h1 className='flax_h1'>FlaxNewSkin</h1>
       </div>
       <div className='flax_main'>
           <div className='flax_photo'>
                <img src={NewSkin} className='flax_main_img'/>
           </div>
           <div className='flax_tiitle'>
                <h3 className='flax_h3'>С КАКОЙ СИСТЕМЫ ЛУЧШЕ НАЧАТЬ ОБУЧЕНИЕ? <br/><br/>

                    Часто такой вопрос задают нам в сообщениях группы. 

                    Отвечаем.... Лучше начать с FlaxNewSkin, вот почему👇🏻 

                    Система атравматично и комфортно воздействует на поверхностные кожные слои, быстро удаляет чешуйки и улучшает клеточное дыхание
                             </h3>
                <p className='flax_p'>Может применяться всесезонно без риска пигментации, низкое раздражающее действие, хорошо переносится клиентами с реактивной и смуглой кожей, минимальный период восстановления, предупреждает присоединение инфекции при инвазивных процедурах. Липосомальная форма препарата усиливает и пролонгирует эффект действия основного компонента. 

                        Обладает высокими кератолитическими, антимикотическими и бактерицидными свойствами, хорошо увлажняет кожу. Показывает высокие результаты в коррекции акне, оказывает выраженное антикомедогенное действие. 

                        Система работает только в совокупности, при соблюдении регламента процедуры. Step 1, Step 2, Step 3 и их последовательность являются неотъемлемыми фазами системы по протоколу.
                        </p>
           </div>
            

       </div>
       <div className='flax_history'>
            <p className='flax_history_p'>💢 #FlaxNewSkin - липосомальная система для обновления кожи. БЕЗ УКОЛОВ! 
            -минимальный период восстановления <br/>
            -стимулирует производство факторов роста <br/>
            -уменьшает секрецию меланина <br/>
            -действует на эпидермальный слой, бережно обновляя <br/> 
            -улучшает качество кожи, борется с признаками старения <br/>
            -исправляет секрецию сальных желез <br/>
            -разглаживает остаточные рубцы от акне <br/>

            • Помогает подготовить кожу к процедурам FlaxLift и FlaxSculpt <br/>
            • Устраняет жирный блеск <br/>

            ✅Показания: <br/>
            • угревая болезнь, постакне; <br/>
            • фотостарение; <br/>
            • морщины (старческие и мимические); <br/>
            • шрамы; <br/>
            • пигментные пятна; <br/>
            • тусклая, увядающая кожа. <br/>

            И последний аргумент: обучение и сама процедура проходят быстро и легко. </p>
                </div>
        <div className='flax_prise'>
                        <h4 className='flax_prise_h4'>Цена обучения онлайн 5000₽<br/> обучение в салоне с тренером 7000₽<br/>
            Цена набора 6800₽</h4>
       </div>
       <div className='Skin_image'>
           <img src={Skin2} className="Skin_image_img" />
           <img src={Skin3} className="Skin_image_img" />
           <img src={Skin4} className="Skin_image_img" />
       </div>
    </div>
  );
}

export default FlaxNewSkin;