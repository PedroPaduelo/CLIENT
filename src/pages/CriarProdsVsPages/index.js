import React, { useContext, useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';

import SelectPage from './SelectPage';
import ListProds from '../ListProds';
import CadastraProd from './CadastraProd';

import Alert  from '../../components/Alert';
import api from '../../services/api'

import { ProductContext } from '../../Contexts/ProductContext';

import { AuthContext } from '../../Contexts/AuthContext';

function CriarProdsVsPages() {
  const { toggle, alerta, handleAlert } = useContext(ProductContext)
  const { user } = useContext(AuthContext)

  const [ listprod, slistprod ] = useState([]);

    useEffect(() => {
        async function getItems() {
            try {
                const { data } = await api.get(`/ListProdutos/${user.email}`);
                slistprod(data)
            } catch (error) {
                console.log(error)
            }
        }
        getItems();
    },[user]);

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
               { listprod.length = 0 &&
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