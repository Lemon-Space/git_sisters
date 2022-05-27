
import './App.css';
import {Main} from './Components/Main'
import {Education} from './Education/Education';

import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Manicure} from './CatalogsItem/Manicure/Manicure';
import {FlaxLashes} from './CatalogsItem/FlaxLashes/FlaxLashes'
import {Hair} from './CatalogsItem/Hair/Hair'
import {Cosmo} from './CatalogsItem/Cosmetaligia/Cosmo'
import {Shugaring} from './CatalogsItem/Shugaring/Shugaring'
import {ShugaringPrise} from './Price/Shugaring/ShugaringPrise';
import {MakeupPrise }from './Price/Makeup/MakeupPrise';
import {CosmeticsPrise} from './Price/Cosmetics/CosmeticsPrise';
import {EyebrowPrise} from './Price/Eyebrow/EyebrowPrise';
import {ManicurePrise }from './Price/Manicure/ManicurePrise';
import {HairwomenPrise} from './Price/Hairwomen/HairwomenPrise';
import {HairmanPrise }from './Price/Hairman/HairmanPrise';
import {MassagePrise} from './Price/Massage/MassagePrise';
import { ComponentsContact } from './componentsContact/ComponentsContact';
import { ComponentsService } from './componentService/ComponentsService';


import { useContext } from 'react';
import { Context } from './index';

const App = () => {
  
  const {user} = useContext(Context)
  console.log(user)
  
    return (
      <BrowserRouter>
    <div className="App">
      
     

     <Routes>
       <Route path='/' element={<Main/>} />
       <Route path='/education' element={<Education/>} />
       <Route path='/componentscontact' element={<ComponentsContact/>} />
       <Route path='/componentsservice' element={<ComponentsService/>} />


       <Route path='/manicure' element={<Manicure/>} />
       <Route path='/flaxlashes' element={<FlaxLashes/>} />
       <Route path='/hair' element={<Hair/>} />
       <Route path='/cosmo' element={<Cosmo/>} />
       <Route path='/shugaring' element={<Shugaring/>} />



       <Route path='/makeup' element={<MakeupPrise/>} />
       <Route path='/cosmetics' element={<CosmeticsPrise/>} />
       <Route path='/eyelash' element={<EyebrowPrise/>} />
       <Route path='/manicureservice' element={<ManicurePrise/>} />
       <Route path='/hairwomen' element={<HairwomenPrise/>} />
       <Route path='/barber' element={<HairmanPrise/>} />
       <Route path='/massage' element={<MassagePrise/>} />
       <Route path='/shugaringservice' element={<ShugaringPrise/>} />
       <Route path='/education' element={<Education/>} />
       
      
       

       
     </Routes>
    
    </div>
    </BrowserRouter>
  );
  }
  
  


export default App;
