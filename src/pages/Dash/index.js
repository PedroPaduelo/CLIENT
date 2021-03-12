import React, {useContext} from 'react';


import ProgressBar from 'react-customizable-progressbar'
import { ProductContext } from '../../Contexts/ProductContext';

import './style.css'


function PageProduto() {
  const { 
    countProdUser 
  } = useContext(ProductContext)



  
  return (
    <div className="item">
    <div className="title">
      Quantidade de produtos
    </div>

    <ProgressBar
        radius={100}
        progress={countProdUser}
        strokeWidth={18}
        strokeColor="#a0d468"
        strokeLinecap="round"
        trackStrokeWidth={18}
        counterClockwise
    >
          <div className="indicator">
              <div>{countProdUser}%</div>
          </div>
      </ProgressBar>
  </div>
      
  );
}

export default PageProduto;