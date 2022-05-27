import './CosmeticsPrise.css';
import ListCosmetics from './List/ListCosmetics';


import Header from '../../Components/Header/Header'
import Insta from '../../Components/Insta/Insta'
import Address from '../../Components/Address/Address'
import Footer from '../../Components/Footer/Footer'
import Telephone from '../../Components/Telephone/Telephone';
import ScrollToTop from '../../Components/ScrollTop';




function CosmeticsPrise() {
  return (
    <div className='CosmeticsPrise'>
      <ScrollToTop/>
      <Header/>
      <ListCosmetics/>
      <Telephone/>
      <Insta/>
      
      <Address/>
      <Footer/>
    
      
    </div>
 
      
 
  );
}

export {CosmeticsPrise};