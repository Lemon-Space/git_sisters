import './HairmanPrise.css';
import ListHairman from './List/ListHairman';

import Header from '../../Components/Header/Header'
import Insta from '../../Components/Insta/Insta'
import Address from '../../Components/Address/Address'
import Footer from '../../Components/Footer/Footer'
import Telephone from '../../Components/Telephone/Telephone';
import ScrollToTop from '../../Components/ScrollTop';





function HairmanPrise() {
  return (
    <div className='HairmanPrise'>
      <ScrollToTop/>
      <Header/>
      <ListHairman/>
      <Telephone/>
      <Insta/>
     
      <Address/>
      <Footer/>
      
    </div>
 
      
 
  );
}

export {HairmanPrise};