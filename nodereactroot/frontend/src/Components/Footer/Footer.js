import React from "react";
import './Footer.css'
import SistersLogo from '../../img/Logowight.svg'
import Instag from '../../img/insta.png'
import Wk from '../../img/vk (1).png'
import Whatsapp from '../../img/whats.png'
import Telega from '../../img/telegram (2).png'

function Footer () {
    return(
        <div className="Footer">
                <div className="Footer_div">

                    <img className="Footer_div_img" src={SistersLogo} />
                    <div className="Footer_media">
                        <a href="https://www.instagram.com/aura_krasoty_surgut.86/" className="Footer_media_items"  >
                            <img className="Footer_media_items_img" src={Instag}/>
                        </a>
                        <a href="https://vk.com/@kunduz88" className="Footer_media_items">
                            <img className="Footer_media_items_img" src={Wk}/>
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=79322578727" className="Footer_media_items">
                            <img className="Footer_media_items_img" src={Whatsapp}/>
                        </a>
                        <a href="https://t.me/SistersBK89322578727" className="Footer_media_items">
                            <img className="Footer_media_items_img" src={Telega}/>
                        </a>
                    </div>
                    <div className="Footer_sisters">
                        Sisters B.K.<br/> 2022
                    </div>
                    
                </div>
        </div>

    );
}

export default Footer;