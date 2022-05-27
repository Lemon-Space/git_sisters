import React from 'react'
import './MainEducation.css'
import vector2 from '../../img/Vector 2.png'
import Kunduz from '../../img/Kunduz.png'


import {Link} from 'react-scroll'

function MainEducation () {
    return(
        <div className='MainEducation'>
             <div className='main_tittle'>
                <h1 className='main_h1'>Твоя новая профессия <br/>
                    всего за пару недель</h1>
                <span className='main_span'>У нас  ты получишь курсы бьюти мастера и<br/>
                        начнешь зарабатывать всего в несколько кликов.<br/>
                        Действуй!</span> <br/>
             <Link to="Catalog_scroll" smooth={true} duration={800}>  <button className='main_button'  >
                <p className='button_p'>Посмотреть курсы</p>
                    </button></Link>   
                
                <h5 className='main_h5'>Нажми сейчас и получи скидку!</h5>       
             </div>
             {/* <div className='main_vector_div'>
                    <img src={vector2} className="main_vector" />
                </div> */}
             <div className='main_photo'>
                    <img src={Kunduz}  className="main_photo_img"/>
             </div>
          
        </div>
    );
}

export default MainEducation;