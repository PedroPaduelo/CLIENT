import React, {useState, useContext} from 'react';

import { Button, Grid, InputAdornment, TextField, Typography } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import CardMedia from '@material-ui/core/CardMedia';

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
  gridItemImg:{
    justifyContent: 'center',
    width: "100%",
    display: 'flex',
    flexDirection: "column", 
    marginTop: "1rem",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "row"
    },


  },


  gridItemBtnBack:{
    justifyContent: 'space-between',
    width: "100%",
    display: 'flex',
    padding: "2rem"
  },
  
  gridItemBtn:{
    justifyContent: 'center',
    width: "100%",
    display: 'flex',
    marginTop: "5rem"
  },

  btnBack: {
    alignSelf:'center',
    justifySelf: 'center',
  },

  cardMedia: { 
    borderRadius: "15px",
    marginTop: "2rem"
  },
  
}));





function Creatprod() {
    const classes = useStyles();

    const { handleUpdataProd, handleToggleEditProdGoBack, editcamp, prod } = useContext(ProductContext)

    const [ produtcname, sprodutcname ] = useState(prod.produtcname);

    const [ img1, simg1 ] = useState(prod.img1);
    const [ img2, simg2 ] = useState(prod.img2);
    const [ img3, simg3 ] = useState(prod.img3);

    const [ produtcdescription1, sprodutcdescription1 ] = useState(prod.produtcdescription1);
    const [ produtcdescription2, sprodutcdescription2 ] = useState(prod.produtcdescription2);
    const [ produtcdescription3, sprodutcdescription3 ] = useState(prod.produtcdescription3);

    const [ poductsubhead, spoductsubhead ] = useState(prod.poductsubhead);
    const [ pixelfacebook, spixelfacebook ] = useState(prod.pixelfacebook);
    const [ googleanalitic, sgoogleanalitic ] = useState(prod.googleanalitic);
    const [ whatsvendedor, swhatsvendedor ] = useState(prod.whatsvendedor);
    const [ statusprodutc ] = useState("Ativo");
    const [ linkbuy, slinkbuy ] = useState(prod.linkbuy);
    const [ price, sprice ] = useState(prod.price);
    const [ linkpage, slinkpage ] = useState(prod.linkpage);

  async function updataProd(){

    await handleUpdataProd({
      id: prod.id,
      produtcname,
      poductsubhead,
      whatsvendedor,
      img1,
      img2,
      img3,
      produtcdescription1,
      produtcdescription2,
      produtcdescription3,
      pixelfacebook,
      googleanalitic,
      statusprodutc,
      linkbuy,
      price,
      linkpage,
      email_user: prod.email_user,
    })

  }


  
  return (

    <Grid
      container
      className={classes.root}
    >
      <Grid item xs={12} className={classes.gridItemBtnBack}>
        <Typography variant="h5" gutterBottom>
          Atualizar produto
        </Typography>

        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleToggleEditProdGoBack}
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





          <Grid item xs={12} className={classes.gridItem}>
            <TextField 
              id="standard-basic" 
              label="Name do Produto" 
              fullWidth
              required
              value={produtcname}
              onChange={(e)=>{sprodutcname(e.target.value)}}
              disabled={editcamp}
            />
          </Grid>




          <Grid item xs={12} sm={4} className={classes.gridItemImg}>
            <TextField
              id="outlined-multiline-static"
              label="Imagem 1"
              required
              fullWidth
              value={img1}
              onChange={(e)=>{simg1(e.target.value)}}
              disabled={editcamp}
            />

            { img1 &&
              <CardMedia
                component="img"
                className={classes.cardMedia}
                image={img1}
                title="Image title"
              />
            }
          </Grid>

          <Grid item xs={12} sm={4} className={classes.gridItemImg}>
            <TextField
              id="outlined-multiline-static"
              label="Imagem 2"
              fullWidth
              value={img2}
              onChange={(e)=>{simg2(e.target.value)}}
              disabled={editcamp}
            />

            { img2 &&
              <CardMedia
                component="img"
                className={classes.cardMedia}
                image={img2}
                title="Image title"
              />
            }
          </Grid>

          <Grid item xs={12} sm={4} className={classes.gridItemImg}>
            <TextField
              id="outlined-multiline-static"
              label="Imagem 3"
              fullWidth
              value={img3}
              onChange={(e)=>{simg3(e.target.value)}}
              disabled={editcamp}
            />

            { img3 &&
              <CardMedia
                component="img"
                className={classes.cardMedia}
                image={img3}
                title="Image title"
              />
            }
          </Grid>





          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              id="outlined-multiline-static"
              label="Sub Header"
              multiline
              required
              rows={1}
              variant="outlined"
              fullWidth
              value={poductsubhead}
              onChange={(e)=>{spoductsubhead(e.target.value)}}
              disabled={editcamp}
            />
          </Grid>



          
          <Grid item xs={12} className={classes.gridItem}>
            <TextField
              id="outlined-multiline-static"
              label="Descrição do produt 1"
              multiline
              required
              rows={3}
              variant="outlined"
              fullWidth
              value={produtcdescription1}
              onChange={(e)=>{sprodutcdescription1(e.target.value)}}
              disabled={editcamp}
            />
          </Grid>

          <Grid item xs={12} sm={6} className={classes.gridItem}>
            <TextField
              id="outlined-multiline-static"
              label="Descrição do produt 2"
              multiline
              rows={2}
              variant="outlined"
              fullWidth
              value={produtcdescription2}
              onChange={(e)=>{sprodutcdescription2(e.target.value)}}
              disabled={editcamp}
            />
          </Grid>

          <Grid item xs={12} sm={6} className={classes.gridItem}>
            <TextField
              id="outlined-multiline-static"
              label="Descrição do produt 3"
              multiline
              rows={2}
              variant="outlined"
              fullWidth
              value={produtcdescription3}
              onChange={(e)=>{sprodutcdescription3(e.target.value)}}
              disabled={editcamp}
            />
          </Grid>




          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            <TextField
              label="Preço"
              id="standard-start-adornment"
              required
              InputProps={{
                  startAdornment: <InputAdornment position="start">R$</InputAdornment>,
              }}
              fullWidth
              value={price}
              onChange={(e)=>{sprice(e.target.value)}}
              disabled={editcamp}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            <TextField 
              id="standard-basic" 
              label="Pixel do facebook" 
              fullWidth
              value={pixelfacebook}
              onChange={(e)=>{spixelfacebook(e.target.value)}}
              disabled={editcamp}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            <TextField 
              id="standard-basic" 
              label="Googel analitic" 
              fullWidth
              value={googleanalitic}
              onChange={(e)=>{sgoogleanalitic(e.target.value)}}
              disabled={editcamp}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            <TextField 
              id="standard-basic" 
              label="Whast do vendedor" 
              required
              fullWidth
              value={whatsvendedor}
              onChange={(e)=>{swhatsvendedor(e.target.value)}}
              disabled={editcamp}
            />
          </Grid>



          <Grid item xs={12} sm={6} md={6} className={classes.gridItem}>
            <TextField 
              id="standard-basic" 
              label="Link do pagamento" 
              required
              fullWidth
              value={linkbuy}
              onChange={(e)=>{slinkbuy(e.target.value)}}
              disabled={editcamp}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}className={classes.gridItem}>
            <TextField
              label="Link da pagina"
              required
              id="standard-start-adornment"
              InputProps={{
                  startAdornment: <InputAdornment position="start">http://nommand.com.br/</InputAdornment>,
              }}
              fullWidth
              value={linkpage}
              onChange={(e)=>{slinkpage(e.target.value)}}
              disabled={editcamp}
            />
          </Grid>
          



          <Grid item xs={12} className={classes.gridItemBtn} >
            <Button 
              variant="contained" 
              color="primary" 
              className={classes.btn}
              onClick={updataProd}
            >
              Salvar edição
            </Button>
          </Grid>
       
        </Grid>
      </Paper>

    </Grid>
    
  );
}

export default Creatprod;