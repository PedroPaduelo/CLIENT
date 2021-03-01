import React, {useContext, useEffect} from 'react';

import { useParams } from "react-router-dom";

import Link from '@material-ui/core/Link';

import { Button, Container, Grid, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { ProductContext } from '../../Contexts/ProductContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "100%"
  },

  title: {
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem"
  },

  conteinerDefinicao: {
    display: "flex",
    padding: theme.spacing(2),
    justifyContent: "center",
    alignItems: "center"
  },

  paper:{
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  },

  imagem: {
    width: "50%",
    borderRadius: "10px"
  }

}));


function PageProduto() {
  const { handleProd, prod } = useContext(ProductContext)
  let { id } = useParams();
  const classes = useStyles();

  useEffect(()=>{
    async function getProd(){
      await handleProd(id)
    }
    getProd()

  },[id])


  return (
    <Container className={classes.root}>
      <Paper elevation={3} className={classes.paper} >
        <Grid container spacing={3}>

          <Grid item xs={12} className={classes.conteinerDefinicao}>
            <Typography variant="h3" className={classes.title}>
              {prod.produtcname}
            </Typography>
          </Grid>



          <Grid item xs={12} className={classes.conteinerDefinicao}>
            <img src={prod.produtcfile} className={classes.imagem} alt={prod.produtcname}/>
          </Grid>



          <Grid item xs={12} className={classes.conteinerDefinicao}>
            <Typography variant="h5" className={classes.title}>
              {prod.produtcdescription}
            </Typography>
          </Grid>



          <Grid item xs={12} className={classes.conteinerDefinicao}>
            <Link  href={prod.linkbuy}>
              <Button variant="contained" color="primary" className={classes.btn}>
                Comprar
              </Button>
            </Link>
          </Grid>


        </Grid>
      </Paper>
    </Container>
  );
}

export default PageProduto;