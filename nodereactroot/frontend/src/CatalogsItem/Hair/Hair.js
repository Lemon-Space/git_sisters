import React from 'react';
import './Hair.css';

import Header from '../../Components/Header/Header'
import Number from '../../Education/Number/Number';
import Address from '../../Components/Address/Address'
import Footer from '../../Components/Footer/Footer'
import List from '../Hair/List/List';
import ScrollToTop from '../../Components/ScrollTop';

function Hair() {
  return (
    <div className="Hair">
      <ScrollToTop/>
        <Header/>
        <List/>
        <Number/>
        <Address/>
        <Footer/>
    </div>
  );
}

export  {Hair};