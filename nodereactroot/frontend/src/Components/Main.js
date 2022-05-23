import React from "react";
import './Main.css'

import Header from './Header/Header'
import Logo from './Logo/Logo'
import Galary from './Galary/Galary'
import About from './About/About'
import Service from './Service/Service'
import Telephone from './Telephone/Telephone'
import Insta from './Insta/Insta'
import Footer from './Footer/Footer'
import Address from './Address/Address'
import Slider from './Slider/Slider'
import Review from './Review/Review';
import Maps from './Map/Maps';
import ScrollToTop from "./ScrollTop";

import { ReactDOM } from "react";



function Main() {
    return(
        <div>
            <ScrollToTop/>
            <Header />      
            <Logo/>
            <About/>
            <Galary/>
            <Service/>
            <Telephone/>
            <Insta/>
            <Slider/>
            <Review/>
            <Maps/>        
            <Address/>
            <Footer/>
      
        </div>
    )
}

export  {Main};