import React from 'react'
import Header from '../Components/Header/Header'
import Service from '../Components/Service/Service'
import Insta from '../Components/Insta/Insta'
import Telephone from '../Components/Telephone/Telephone'
import Address from '../Components/Address/Address'
import Footer from '../Components/Footer/Footer'


const ComponentsService = () => {
  return (
    <div className='ComponentsService'>
            <Header/>
          <Service/>
          <Telephone/>
          <Insta/>
          <Address/>
          <Footer/>
    </div>
  )
}

export  {ComponentsService};