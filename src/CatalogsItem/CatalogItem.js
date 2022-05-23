import React from 'react';
import './CatalogItem.css';
import Cosmo from './Cosmetaligia/Cosmo';
import FlaxLashes from './FlaxLashes/FlaxLashes';
import Hair from './Hair/Hair';
import Manicure from './Manicure/Manicure';
import Shugaring from './Shugaring/Shugaring';


function CatalogItem() {
  return (
    <div className="CatalogItem">
        <Cosmo/>
        <FlaxLashes/>
        <Manicure/>
        <Shugaring/>
        <Hair/>
    </div>
  );
}

export default CatalogItem;
