import React from 'react';
import './Cosmo.css';

import Header from '../../Components/Header/Header'
import Number from '../../Education/Number/Number';
import Footer from '../../Components/Footer/Footer'
import Address from '../../Components/Address/Address';
import Flaxlift from './Flaxlift/Flaxlift';
import FlaxSculpt from './FlaxSculpt/FlexSculpt';
import FlaxNewSkin from './FlaxNewSkin/FlaxNewSkin';
import FlaxFace from './FlaxFace/FlaxFace';
import ScrollToTop from '../../Components/ScrollTop';


function Cosmo () {
  return (
    <div className="Cosmo">
      <ScrollToTop/>
        <Header/>
        <FlaxSculpt/>
        <Flaxlift/>
        <FlaxNewSkin/>
        <FlaxFace/>
        <Number/>
        <Address/>
        <Footer/>
    </div>
  );
}

export {Cosmo};
