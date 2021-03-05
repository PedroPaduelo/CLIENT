import React, {useState, useContext} from 'react';

import { Button, Grid, InputAdornment, TextField, Typography } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { ProductContext } from '../../Contexts/ProductContext';
import { AuthContext } from '../../Contexts/AuthContext';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    alignSelf:'center',
    justifySelf: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  paper:{
      width: "100%",
      display: 'flex',
      flexWrap: 'wrap',
      padding: "2rem",
      justifyContent: 'space-around',
      margin: "0 1rem 0 1rem"
  },
  gridItem:{
    justifyContent: 'center',
    width: "100%",
    display: 'flex',
  },
  gridItemBtn:{
    justifyContent: 'center',
    width: "100%",
    display: 'flex',
    marginTop: "2rem"
  },
  gridItemBtnBack:{
    justifyContent: 'space-between',
    width: "100%",
    display: 'flex',
  },
  btnBack: {
    alignSelf:'center',
    justifySelf: 'center',
  },
  
}));


function Creatprod() {
    const classes = useStyles();

    const { handleCreatedProd, handleToggleProd } = useContext(ProductContext)
    const { user } = useContext(AuthContext)

    const [ produtcname, sprodutcname ] = useState();
    const [ produtcfile, sprodutcfile ] = useState();
    const [ produtcdescription, sprodutcdescription ] = useState();
    const [ poductsubhead, spoductsubhead ] = useState();
    const [ pixelfacebook, spixelfacebook ] = useState();
    const [ googleanalitic, sgoogleanalitic ] = useState();
    const [ whatsvendedor, swhatsvendedor ] = useState();
    const [ statusprodutc, sstatusprodutc ] = useState();
    const [ linkbuy, slinkbuy ] = useState();
    const [ price, sprice ] = useState();
    const [ linkpage, slinkpage ] = useState();

  async function creatrdProd(){

    await handleCreatedProd({
      produtcname,
      produtcfile,
      poductsubhead,
      whatsvendedor,
      produtcdescription,
      pixelfacebook,
      googleanalitic,
      statusprodutc,
      linkbuy,
      price,
      linkpage,
      email_user: user.email
    })
  }


  
  return (

    <Grid
      container
      spacing={3}
      className={classes.root}
    >
        <Grid item xs={12} className={classes.gridItemBtnBack}>
            <Typography variant="h5" gutterBottom>
              Novo produto
            </Typography>

            <Button variant="contained" color="primary" 
                onClick={handleToggleProd}
            >
                Voltar
            </Button>


        </Grid>
    
    <Paper elevation={3} className={classes.paper}>
        <Grid
            container
            spacing={2}
            className={classes.root}
        >
            <Grid item xs={6} className={classes.gridItem}>
                <TextField 
                    id="standard-basic" 
                    label="Name do Produto" 
                    fullWidth
                    value={produtcname}
                    onChange={(e)=>{sprodutcname(e.target.value)}}
                />
            </Grid>

            <Grid item xs={6} className={classes.gridItem}>
                <TextField 
                id="standard-basic" 
                label="Imagem do produto" 
                fullWidth 
                value={produtcfile}
                onChange={(e)=>{sprodutcfile(e.target.value)}}
                />
            </Grid>

            <Grid item xs={12} className={classes.gridItem}>
                <TextField
                    id="outlined-multiline-static"
                    label="Sub Header"
                    multiline
                    rows={2}
                    variant="outlined"
                    fullWidth
                    value={poductsubhead}
                    onChange={(e)=>{spoductsubhead(e.target.value)}}
                />
            </Grid>

            

            <Grid item xs={12} className={classes.gridItem}>
                <TextField
                    id="outlined-multiline-static"
                    label="Descrição do produt"
                    multiline
                    rows={3}
                    variant="outlined"
                    fullWidth
                    value={produtcdescription}
                    onChange={(e)=>{sprodutcdescription(e.target.value)}}
                />
            </Grid>

            <Grid item xs={3} className={classes.gridItem}>
                <TextField
                    label="Preço"
                    id="standard-start-adornment"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                    }}
                    fullWidth
                    value={price}
                    onChange={(e)=>{sprice(e.target.value)}}
                />
            </Grid>

            <Grid item xs={3} className={classes.gridItem}>
                <TextField 
                id="standard-basic" 
                label="Pixel do facebook" 
                fullWidth
                value={pixelfacebook}
                onChange={(e)=>{spixelfacebook(e.target.value)}}
                />
            </Grid>

            <Grid item xs={3} className={classes.gridItem}>
                <TextField 
                id="standard-basic" 
                label="Googel analitic" 
                fullWidth
                value={googleanalitic}
                onChange={(e)=>{sgoogleanalitic(e.target.value)}}
                />
            </Grid>

            <Grid item xs={3} className={classes.gridItem}>
                <TextField 
                id="standard-basic" 
                label="Whast do vendedor" 
                fullWidth
                value={whatsvendedor}
                onChange={(e)=>{swhatsvendedor(e.target.value)}}
                />
            </Grid>


            <Grid item xs={2} className={classes.gridItem}>
                <TextField 
                id="standard-basic"
                label="Status" 
                fullWidth
                value={statusprodutc}
                onChange={(e)=>{sstatusprodutc(e.target.value)}}
                />
            </Grid>

            <Grid item xs={5} className={classes.gridItem}>
                <TextField 
                id="standard-basic" 
                label="Link do pagamento" 
                fullWidth
                value={linkbuy}
                onChange={(e)=>{slinkbuy(e.target.value)}}
                />
            </Grid>

            <Grid item xs={5} className={classes.gridItem}>
                <TextField
                label="Link da pagina"
                id="standard-start-adornment"
                InputProps={{
                    startAdornment: <InputAdornment position="start">http://nommand.com.br/</InputAdornment>,
                }}
                fullWidth
                value={linkpage}
                onChange={(e)=>{slinkpage(e.target.value)}}
                />
            </Grid>

            <Grid item xs={12} className={classes.gridItemBtn} >
                <Button variant="contained" color="primary" className={classes.btn}
                onClick={creatrdProd}
                >
                    Gravar
                </Button>
            </Grid>
        </Grid>
    </Paper>

    </Grid>
    
  );
}

export default Creatprod;