import React from 'react';
import './Shugaring.css';

import Header from '../../Components/Header/Header'
import Number from '../../Education/Number/Number';
import Address from '../../Components/Address/Address'
import Footer from '../../Components/Footer/Footer'
import List from '../Shugaring/List/List';
import ScrollToTop from '../../Components/ScrollTop';

function Shugaring() {
  return (
    <div className="Shugaring">
      <ScrollToTop/>
        <Header/>
        <List/>
        <Number/>
        <Address/>
        <Footer/>
    </div>
  );
}

export  {Shugaring};