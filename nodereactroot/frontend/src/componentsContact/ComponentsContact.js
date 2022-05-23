import React from 'react'
import Header from '../Components/Header/Header'

import Address from '../Components/Address/Address'
import Footer from '../Components/Footer/Footer'
import Maps from '../Components/Map/Maps'
import ScrollToTop from '../Components/ScrollTop'

const ComponentsContact = () => {
  return (
    <div className='ComponentsContact'>
           <ScrollToTop/>
          <Header/>
          <Maps/> 
          <Address/>
          <Footer/>
    </div>
  )
}

export  {ComponentsContact};