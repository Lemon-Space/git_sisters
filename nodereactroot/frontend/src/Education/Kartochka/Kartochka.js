import React from "react";
import './Kartochka.css'
import knowledge from '../../img/knowledge.png'
import book from '../../img/book.png'
import knowled from '../../img/knowledge.png'
import hand from '../../img/hand.png'
import helper from '../../img/drawn.png'

function Kartochka () {
    return (
        <div className="Kartochka">
            <h2 className="karta_h2">ЧТО ВЫ ПОЛУЧИТЕ ВМЕСТЕ С ЛЮБЫМ НАШИМ КУРСОМ?</h2>
            <div className="karta_main">
                <div className="karta_block1">
                        <img src={knowledge} className="karta_block1_img" />
                        <h5 className="karta_block_h5">ЗНАНИЯ</h5>
                        <p className="karta_block1_p">Вы получите теоретические знания и практические навыки, достаточные для работы по профессии</p>
                </div>
                
                <div className="karta_block3">
                        <img src={book} className="karta_block1_img" />
                        <h5 className="karta_block_h5">ПОДДЕРЖКА</h5>
                        <p className="karta_block1_p">На протяжении всего курса,будете получать индивидуальную поддержку преподавателя-куратора</p>
                </div>
                
                <div className="karta_block4">
                        <img src={knowled} className="karta_block1_img" />
                        <h5 className="karta_block_h6">
                        СВИДЕТЕЛЬСТВО С ВНЕСЕНИЕМ<br/>В ГОС. РЕЕСТР</h5>
                        <p className="karta_block1_p">По окончанию курса вы получите сертификат /свидетельство/диплом с внесением в гос реестр</p>
                </div>
            </div>
            
            <div className="karta_main2">
                <div className="karta_block2">
                        <img src={hand} className="karta_block1_img" />
                        <h5 className="karta_block_h5">ПРОДВИЖЕНИЕ</h5>
                        <p className="karta_block1_p">В каждый наш курс входит блок по продвижению себя в социальных сетях </p>
                </div>
                <div className="karta_block5">
                        <img src={helper} className="karta_block1_img" />
                        <h5 className="karta_block_h5">ПОМОЩЬ</h5>
                        <p className="karta_block1_p">Мы поможем сформировать вам портфолио</p>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default Kartochka;