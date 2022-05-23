import React from "react";
import './Footer.css'
import SistersLogo from '../../../img/Logowight.svg'
import Instag from '../../../img/insta.svg'
import Wk from '../../../img/wk.svg'
import Whatsapp from '../../../img/whatsapp.svg'
import Telega from '../../../img/telegra.svg'

function Footer () {
    return(
        <div className="Footer">
                <div className="Footer_div">

                    <img className="Footer_div_img" src={SistersLogo} />
                    <div className="Footer_media">
                        <a href="https://www.instagram.com/aura_krasoty_surgut.86/" className="Footer_media_items"  >
                            <img className="Footer_media_items_img" src={Instag}/>
                        </a>
                        <a href="" className="Footer_media_items">
                            <img className="Footer_media_items_img" src={Wk}/>
                        </a>
                        <a href="" className="Footer_media_items">
                            <img className="Footer_media_items_img" src={Whatsapp}/>
                        </a>
                        <a href="" className="Footer_media_items">
                            <img className="Footer_media_items_img" src={Telega}/>
                        </a>
                    </div>
                    <div className="Footer_sisters">
                        Sisters B.K
                    </div>
                    
                </div>
        </div>

    );
}

export default Footer;