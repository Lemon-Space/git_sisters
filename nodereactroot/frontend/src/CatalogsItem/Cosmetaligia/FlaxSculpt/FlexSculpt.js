import React from 'react';
import './FlaxSculpt.css';

import flaxsculpt from '../../../img/flaxsculpt.jpg'

function FlaxSculpt() {
  return (
    <div className="FlaxSculpt">
       <div className='Flax'>
           <h1 className='flax_h1'>FlaxSculpt</h1>
       </div>
       <div className='flax_main'>
           <div className='flax_photo'>
                <img src={flaxsculpt} className='flax_main_img'/>
           </div>
           <div className='flax_tiitle'>
                <h3 className='flax_h3'>Что такое FlaxSculpt <br/><br/>
 
                            FlaxSculpt- процедура пептидного армирования лица 
                             Процедура, которая позволяет проникнуть пептидам в максимальной концентрации, благодаря природным свойствам гипса❗️ мы получаем возможность работы без оборудования!<br/><br/>
                             </h3>
                <p className='flax_p'> Как это работает? <br/>
                    При нагревании коллагеновые волокна, из которых состоит соединительная ткань и от которых зависит ее эластичность и плотность - начинают сжиматься. Таким образом, происходит омоложение кожного покрова. 
                    
                    На этапе нагревания кожи до 42 гр поры кожи получают сигнал о том, что лицо перегревается. Таким образом, оно начинает охлаждаться! Для этого открываются поры, именно в этот момент происходит проникновение активных компонентов в глубокие слои кожи ( в нашем случае это запатентованный пептид Sun-Coll). 
                    
                    На следующем этапе охлаждения до +5 градусов происходит другая реакция кожи: из-за понижения температуры , организм получает сигнал о возможном переохлаждении, вследствие чего поры закрываются 
                    
                    Таким образом, активные вещества антивозрастных средств , находящиеся в коже, остаются закрытыми в ее глубоких слоях. 
                    
                    Сколько сохраняется эффект?</p>
           </div>
            

       </div>
       <div className='flax_history'>
            <p className='flax_history_p'>Что такое пептиды и зачем нужны? <br/>
 
                    Пептиды ни что иное как вещества, состоящие из коротких цепочек аминокислот (их число не превышает 50, если бы их было больше, то это уже был бы белок). Аминокислоты - это кирпичики, которые наш организм использует при строительстве мышц, тканей и внутренних органов. Пептиды на этой стройке выполняют роль проводников, передающих информацию в клетках, стимулируя их к делению и, тем самым, омолаживая эпидермис. Пептиды в косметике помогают управлять процессами старения. Они меньше и легче белков, а значит, могут глубже проникать в дерму и эффективно бороться с признаками старения! 
                    
                    <br/>
                    
                    Чтобы сохранить эффект надолго необходимо пройти курс, который может состоять из 4-10 сеансов. Зависит от исходного состояния кожи и какой образ жизни ведет человек. Для лучшего эффекта хорошо сочетать с процедурой Flaxlift. 
                    
                    Показания: <br/>
                    
                    Моделирование и коррекция овала лица 
                    Дряблость вялость кожи 
                    Одутловатость, пастозность лица 
                    Сниженный тонус тканей 
                    Жировые отложения, двойной подбородок, брыли, "бульдожьи щечки" </p>
       </div>
       <div className='flax_prise'>
            <h4 className='flax_prise_h4'>Сколько стоит? <br/>
 
                Стоимость онлайн курса 5000,обучение в салоне красоты лично с тренером 7000₽ (сертификат от лицензированной академии). <br/> Стоимость набора 5800. <br/>
                
                ✅Могу ли я приобрести только сам набор без курса? <br/>
                
                Нет, первоначальное приобретение набора идет только с обучением. <br/>
                
                ✅Не успеваю, не смогу присутствовать на онлайн-обучении, что делать? <br/>
                
                Можно приобрести в записи и смотреть дома .<br/>
                
                Вся продукция сертифицирована и имеет необходимую документацию! - УЖЕ БОЛЕЕ 1500 отучившихся - Более 70 Лицензированных тренеров</h4>
       </div>
      
    </div>
  );
}

export default FlaxSculpt;