import React, { useContext } from 'react';

import { Grid } from '@material-ui/core';

import Creatprod from './Creatprod';
import ListProds from '../ListProds';
import ViewProd from './ViewProd';

import Alert  from '../../components/Alert';

import { ProductContext } from '../../Contexts/ProductContext';

function CriarProdsVsPages() {
  const { toggle, alerta, handleAlert } = useContext(ProductContext)

  return (
    <Grid
      container
      justify="space-between"
      spacing={3}
    >
      <Alert alerta={alerta} handleClose={handleAlert}/>

      <Grid item xs={12}>
        {
          toggle ? <ViewProd/> : <> <Creatprod/> <ListProds/>   </> 
        }
      </Grid>
    </Grid>



  );
}

export default CriarProdsVsPages;