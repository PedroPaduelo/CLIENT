import React, { useContext } from 'react';

import { Grid } from '@material-ui/core';
import SelectPage from './SelectPage';
import ListProds from './ListProds';
import CadastraProd from './CadastraProd';
import AtualizaProd from './AtualizaProd';
import Alert  from '../../components/Alert';
import { ProductContext } from '../../Contexts/ProductContext';



function CriarProdsVsPages() {
  const { 
    toggleCria, 
    toggleEdit,
    toggleSelectPage,
    toggleListProd,

    alerta, 
    handleAlert, 
  } = useContext(ProductContext)
 
  return (
    <Grid
      container
      justify="space-between"
      spacing={3}
    >
      <Alert alerta={alerta} handleClose={handleAlert}/>

        {  toggleSelectPage &&
          <SelectPage/> 
        }  

        { 
          toggleCria && <CadastraProd/> 
        }

        { 
          toggleEdit && <AtualizaProd/> 
        }

        { 
          toggleListProd && 
          <Grid item xs={12}>
            <ListProds/>  
          </Grid> 
        }

        

    </Grid>
    



  );
}

export default CriarProdsVsPages;