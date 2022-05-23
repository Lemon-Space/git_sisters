import React from "react";
import './About.css'
import Main_picture from '../../img/Kun.jpg'

import diploma from '../../img/diplom.jpg'
import diploma2 from '../../img/diplom2.jpg'
import diploma3 from '../../img/diplom3.jpg'

import diploma5 from '../../img/diplom5.jpg'
import diploma6 from '../../img/diplom6.jpg'
import diploma7 from '../../img/diplom7.jpg'
import diploma8 from '../../img/diplom8.jpg'
import diploma9 from '../../img/diplom9.jpg'
import diploma10 from '../../img/diplom10.jpg'
import diploma11 from '../../img/diplom11.jpg'
import diploma12 from '../../img/diplom12.jpg'
import diploma13 from '../../img/diplom13.jpg'
import diploma14 from '../../img/diplom14.jpg'
import diploma15 from '../../img/diplom15.jpg'
import diploma16 from '../../img/diplom16.jpg'
import diploma17 from '../../img/diplom17.jpg'
import diploma18 from '../../img/diplom18.jpg'
import diploma19 from '../../img/diplom19.jpg'
import diploma20 from '../../img/diplom20.jpg'

import {Carousel} from 'react-bootstrap'



function About ()  {
    return(
        <div className="About">
                <div className="about_main_div">
                    <div className="about_tittle">
                        <h1 className="about_tittle_h1">О нас</h1>
                        <h4 className="about_tittle_h4">ОТРАСЛЕВОЙ ЦЕНТР ИНДУСТРИИ КРАСОТЫ</h4>
                        <span className="about_tittle_span">
                        Основатели  салона красоты. Sisters B.K.<br/>
                        <br/>
                        В сфере красоты 2019 года<br/> 
                        <br/>
                        С нуля запустила школу и выпустила более<br/>
                            100+ учениц<br/>
                            <br/>
                        Разработала авторскую<br/> программу “Базовуй курс маникюра” и<br/> “Lash-мастер”<br/>
                        <br/>
                        С первого дня нашими базовыми <br/> принципами работы стали доброжелательность, <br/> чуткое отношение к каждому клиенту и <br/> высокий уровень профессионализма во <br/> всех сферах оказываемых услуг
                        </span>
                    </div>

                    <div className="about_main_picture">
                        <img src={Main_picture} className="about_main_img" />

                    </div>
                </div>

            <div className="about_diplom">
                <Carousel className='about_diplom_slider' >
        
      
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma3}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                       
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma5}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma6}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma7}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma8}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma9}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma10}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block"
                            src={diploma11}
                            alt="Third slide"
                        />
                        
                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                        </Carousel.Item>
                    
      
                 </Carousel>
                 <Carousel className='about_diplom_slider' >
        
      
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma2}
                            alt="Second slide"
                        />
                        
                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block"
                            src={diploma12}
                            alt="Third slide"
                        />
                        
                        <Carousel.Caption>
                        
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma13}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma14}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma15}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma16}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma17}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma18}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma19}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                        <Carousel.Item className='about_Carousel_item'>
                        <img
                            className="d-block "
                            src={diploma20}
                            alt="Second slide"
                        />
                        
                        </Carousel.Item>
                    

                </Carousel>
            </div>
           
        </div>
    );
    }

export default About;