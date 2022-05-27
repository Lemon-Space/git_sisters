import React from "react";
import './Why.css'
import Back from '../../img/background2.png'
import comfort from '../../img/Yes.png'
import practice from '../../img/tild.png'
import study from '../../img/barberchair.png'
import hour from '../../img/24-hours.png'

function Why () {
    return(
        <div className='Why'>
             
             <h1 className="why_h1">Почему имменно мы?</h1> <br/>

            <div className="why_tittle">
            
                <div className="why_comfort">
                    <img className="why_comfort_img" src={comfort} />
                    <div> <h3 className="why_comfort_h3">Результат</h3>
                    <p className="why_comfort_p">Обучили более 100 учениц и некоторые из них <br/> открыли свои студии</p></div>
                   
                </div>
                <div className="why_comfort2">
                    <img className="why_comfort_img2" src={practice} />
                    <div> <h3 className="why_comfort_h3">Много практики</h3>
                    <p className="why_comfort_p">Очень много моделей, каждое занятие – практическая <br/>
                                        отработка полученных навыков.</p></div>
                   
                </div>
            </div>
            <div className="why_tittle2">
            
                <div className="why_comfort">
                    <img className="why_comfort_img3" src={study} />
                    <div> <h3 className="why_comfort_h3">Современная учебная база</h3>
                    <p className="why_comfort_p">Обучение проходит в стильном, модном учебном центре,<br/> где xуютно, комфортно и чисто.</p></div>
                   
                </div>
                <div className="why_comfort2">
                    <img className="why_comfort_img4" src={hour} />
                    <div> <h3 className="why_comfort_h3">Поддержка 24/7</h3>
                    <p className="why_comfort_p">В нашем чате вы сможете получить совет и помощь в <br/> любой момент.</p></div>
                   
                </div>
            </div>
        </div>
    );
}

export default Why;