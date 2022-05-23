import './ManicurePrise.css';



import ListManicure from './List/ListManicure';

import Header from '../../Components/Header/Header'
import Insta from '../../Components/Insta/Insta'
import Address from '../../Components/Address/Address'
import Footer from '../../Components/Footer/Footer'
import Telephone from '../../Components/Telephone/Telephone';
import ScrollToTop from '../../Components/ScrollTop';





function ManicurePrise() {
  return (
    <div className='ManicurePrise'>
      <ScrollToTop/>
      <Header/>
      <ListManicure/>
      <Telephone/>
      <Insta/>
     
      <Address/>
      <Footer/>
      
    </div>
 
      
 
  );
}

export  {ManicurePrise};