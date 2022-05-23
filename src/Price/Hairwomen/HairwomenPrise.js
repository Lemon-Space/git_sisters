import './HairwomenPrise.css';
import ListHairwomen from './List/ListHairwomen';

import Header from '../../Components/Header/Header'
import Insta from '../../Components/Insta/Insta'
import Address from '../../Components/Address/Address'
import Footer from '../../Components/Footer/Footer'
import Telephone from '../../Components/Telephone/Telephone';
import ScrollToTop from '../../Components/ScrollTop';





function HairwomenPrise() {
  return (
    <div className='HairwomenPrise'>
      <ScrollToTop/>
    <Header/>
      <ListHairwomen/>
      <Telephone/>
      <Insta/>
      
      <Address/>
      <Footer/>
      
    </div>
 
      
 
  );
}

export {HairwomenPrise};