import './ShugaringPrise.css';



import ListShugaring from './List/ListShugaring';

import Header from '../../Components/Header/Header'
import Insta from '../../Components/Insta/Insta'
import Address from '../../Components/Address/Address'
import Footer from '../../Components/Footer/Footer'
import Telephone from '../../Components/Telephone/Telephone';
import ScrollToTop from '../../Components/ScrollTop';





function ShugaringPrise() {
  return (
    <div className='ShugaringPrise'>
      <ScrollToTop/>
     <Header/>
      <ListShugaring/>
      <Telephone/>
      <Insta/>
     
      <Address/>
      <Footer/>
      
    </div>
 
      
 
  );
}

export {ShugaringPrise};