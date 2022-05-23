import React from "react";
import './Review.css'
import Belli from '../../img/Belli.png'
import {Carousel} from 'react-bootstrap'

import re1 from '../../img/re1.jpg'
import re2 from '../../img/re2.jpg'
import re3 from '../../img/re3.jpg'
import re4 from '../../img/re4.jpg'
import re5 from '../../img/re5.jpg'
import re6 from '../../img/re6.jpg'
import re7 from '../../img/re7.jpg'
import re8 from '../../img/re8.jpg'
import re9 from '../../img/re9.jpg'
import re10 from '../../img/re10.jpg'
import re11 from '../../img/re11.jpg'
import re12 from '../../img/re12.jpg'
import re13 from '../../img/re13.jpg'
import re14 from '../../img/re14.jpg'
import re15 from '../../img/re15.jpg'
import re16 from '../../img/re16.jpg'
import re17 from '../../img/re17.jpg'
import re18 from '../../img/re18.jpg'
import re19 from '../../img/re19.jpg'
import re20 from '../../img/re20.jpg'
import re21 from '../../img/re21.jpg'

import Review_photo1 from '../../img/review1.jpg'
import Review_photo2 from '../../img/review2.jpg'
import Review_photo3 from '../../img/review3.jpg'
import Review_photo4 from '../../img/review4.jpg'



export default function Review () {
    return(
        <div className="Review">
            <h1 className="Review_h1">Отзывы</h1>
            {/* <img className="Review_img" src={Belli} /> */}



            <div className="Review_slider">
                <Carousel className='Review_slider_block1'>
                    
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block "
                        src={re1}
                        alt="First slide"
                    />
                   
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block "
                        src={re2}
                        alt="First slide"
                    />
                   
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block "
                        src={re3}
                        alt="First slide"
                    />
                   
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block "
                        src={re4}
                        alt="Second slide"
                    />
                    
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block"
                        src={re5}
                        alt="Third slide"
                    />
                    
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block"
                        src={re6}
                        alt="Third slide"
                    />
                    
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block"
                        src={re7}
                        alt="Third slide"
                    />
                    
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block"
                        src={re8}
                        alt="Third slide"
                    />
                    
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block"
                        src={re9}
                        alt="Third slide"
                    />
                    
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block"
                        src={re10}
                        alt="Third slide"
                    />
                    
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block"
                        src={re11}
                        alt="Third slide"
                    />
                    
                    </Carousel.Item>
                </Carousel>



                <Carousel className='Review_slider_block2'>
                    
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block "
                        src={re12}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block"
                        src={re13}
                        alt="Third slide"
                    />
                    
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block"
                        src={re14}
                        alt="Third slide"
                    />
                    
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block"
                        src={re15}
                        alt="Third slide"
                    />
                    
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block"
                        src={re16}
                        alt="Third slide"
                    />
                    
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block"
                        src={re17}
                        alt="Third slide"
                    />
                    
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block "
                        src={re18}
                        alt="First slide"
                    />
                   
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block "
                        src={re19}
                        alt="First slide"
                    />
                   
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block "
                        src={re20}
                        alt="Second slide"
                    />
                    
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='Review_arousel_item'>
                    <img
                        className="Review_d-block"
                        src={re21}
                        alt="Third slide"
                    />
                    
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


            <div className="Review_photo">
                    <div className="Review_photo_block1">
                        <img src={Review_photo1} className="Review_photo_block1_img1"/>
                    </div>
                    <div className="Review_photo_block2">
                        <img src={Review_photo2} className="Review_photo_block1_img1"/>
                    </div>
                    <div className="Review_photo_block1">
                        <img src={Review_photo3} className="Review_photo_block1_img1"/>
                    </div>
                    <div className="Review_photo_block2">
                        <img src={Review_photo4} className="Review_photo_block1_img1"/>
                    </div>
            </div>
            


        </div>
    )
}