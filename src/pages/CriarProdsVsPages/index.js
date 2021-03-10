import React, { useContext } from 'react';

import { Grid } from '@material-ui/core';

import SelectPage from './SelectPage';
import ListProds from '../ListProds';
import CadastraProd from './CadastraProd';

import Alert  from '../../components/Alert';


import { ProductContext } from '../../Contexts/ProductContext';



function CriarProdsVsPages() {
  const { toggle, alerta, handleAlert, listprod } = useContext(ProductContext)
 
  return (
    <Grid
      container
      justify="space-between"
      spacing={3}
    >
      <Alert alerta={alerta} handleClose={handleAlert}/>

      <Grid item xs={12}>
        {
          toggle ? <CadastraProd/> : 
            <> 
               { listprod.length === 0 &&
                    <SelectPage/> 
               }  
                <ListProds/>   
            </> 
        }
      </Grid>
    </Grid>



  );
}

export default CriarProdsVsPages;