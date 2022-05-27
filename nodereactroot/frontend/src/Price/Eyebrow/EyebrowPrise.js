import './EyebrowPrise.css';
import ListEyebrow from './List/ListEyebrow';

import Header from '../../Components/Header/Header'
import Insta from '../../Components/Insta/Insta'
import Address from '../../Components/Address/Address'
import Footer from '../../Components/Footer/Footer'
import Telephone from '../../Components/Telephone/Telephone';
import ScrollToTop from '../../Components/ScrollTop';





function EyebrowPrise() {
  return (
    <div className='EyebrowPrise'>
      <ScrollToTop/>
      <Header/>
      <ListEyebrow/>
      <Telephone/>
      <Insta/>
      
      <Address/>
      <Footer/>
    
      
    </div>
 
      
 
  );
}

export {EyebrowPrise};