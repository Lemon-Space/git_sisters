import './MakeupPrise.css';



import ListMakeup from './List/ListMakeup';

import Header from '../../Components/Header/Header'
import Insta from '../../Components/Insta/Insta'
import Address from '../../Components/Address/Address'
import Footer from '../../Components/Footer/Footer'
import Telephone from '../../Components/Telephone/Telephone';
import ScrollToTop from '../../Components/ScrollTop';






function MakeupPrise() {
  return (
    <div className='MakeupPrise'>
      <ScrollToTop/>
      <Header/>
      <ListMakeup/>
      <Telephone/>
      <Insta/>
      <Address/>
      <Footer/>
     
      
    </div>
  
  );
}

export  {MakeupPrise};