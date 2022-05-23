import React from 'react'
import './Education.css'
import Header from '../Components/Header/Header';
import Main from './Main/MainEducation';
import Telephone from '../Components/Telephone/Telephone';
import Address from '../Components/Address/Address'
import Why from './Why/Why'
import Catalog from './Catalog/Catalog';
import Kartochka from './Kartochka/Kartochka';
import Number from './Number/Number';
import Footer from '../Components/Footer/Footer'
import ScrollToTop from '../Components/ScrollTop';



function Education () {
    return(
        <div className='Education'>
           <ScrollToTop/>
            <Header/>
            <Main/>
            <Why/>
            <Catalog/>
            <Telephone/>
            <Kartochka/>           
            <Number/>          
            <Address/>
            <Footer/>
             
            
        </div>
    );
}

export  {Education};