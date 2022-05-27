import React from 'react';
import './Manicure.css';

import Header from '../../Components/Header/Header'
import Number from '../../Education/Number/Number';
import Address from '../../Components/Address/Address'
import Footer from '../../Components/Footer/Footer'
import Start from '../Manicure/Start/Start';
import Advantage from '../Manicure/Advantage/Advantage';
import ScrollToTop from '../../Components/ScrollTop';

function Manicure() {
  return (
    <div className="Manicure">
      <ScrollToTop/>
        <Header/>
        <Start/>
        <Number/>
        <Advantage/>
        <Address/>
        <Footer/>
    </div>
  );
}

export {Manicure};