import React, {useContext} from 'react';

import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';

import { ProductContext } from '../../Contexts/ProductContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    alignSelf:'center',
    justifySelf: 'center',
    marginBottom: "1rem"
  },

  gridItemBtnBack:{
    justifyContent: 'center',
    width: "100%",
    display: 'flex',
    flexDirection:"column"
  },
  
}));



function Creatprod() {
  const classes = useStyles();

  const { handleToggleProd } = useContext(ProductContext)

  return (

    <Grid
      container
      spacing={3}
      className={classes.root}
    >
      

      <Grid item xs={12} className={classes.gridItemBtnBack}>
        <Typography className={classes.btn} >
            Criar um novo produto
        </Typography>

        <Button variant="contained" color="primary" className={classes.btn} 
          onClick={handleToggleProd}
        >
          Cria agora
        </Button>
      </Grid>

    </Grid>



  );
}

export default Creatprod;