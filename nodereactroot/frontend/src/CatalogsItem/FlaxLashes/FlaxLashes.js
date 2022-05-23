import React from 'react';

import './FlaxLashes.css';

import Address from '../../Components/Address/Address';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Lash from '../FlaxLashes/Lash/Lash'
import Number from '../../Education/Number/Number';
import ScrollToTop from '../../Components/ScrollTop';


function FlaxLashes() {
  return (
    <div className="FlaxLashes">
      <ScrollToTop/>
       <Header/>
       <Lash/>
       <Number/>
       <Address/>      
       <Footer/>
    </div>
  );
}

export {FlaxLashes};