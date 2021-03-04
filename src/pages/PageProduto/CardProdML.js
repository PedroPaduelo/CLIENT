import React from 'react';

import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import ReactGA from 'react-ga';
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  marginTop1: {
    marginTop: "0.1rem"
  },
  marginTop2: {
    marginTop: "2rem"
  },
  marginTop3: {
    marginTop: "3rem"
  },
  marginTop4: {
    marginTop: "4rem"
  },
  marginTop5: {
    marginTop: "5rem"
  },
  alingimgaem: {
    justifyContent: "center",
    alignContent: "center",
    padding: "1rem"
  },
  cardMedia: { 
    borderRadius: "15px"
  },
  fontSize: {
    fontSize: "2rem",
    marginTop: "0.3rem"
  },
  marginleftp1: {
    marginLeft: "0.1rem"
  },
  conteinerDefinicao: {
    display: "flex",
    marginTop: "0rem"
  },
  conteinerDefinicaoimg: {
    marginTop: "1rem",
    padding: "2rem"
  },
  gridItemPriceCompra:{
    justifyContent: 'space-between',
    width: "100%",
    display: 'flex'
  },
  fabbtn:{
      width: "4rem"
  },
  divMarging:{
    display: 'flex'
  },
  btn:{
    marginRight: "2rem",
    marginTop: "0.5rem"
  },
  cardContent: {
    marginTop: "1rem"
  }
}));


ReactGA.pageview(window.location.pathname + window.location.search);

export default function Album({prod}) {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Grid
            container
            spacing={1}
            className={classes.cardContent}
        >
            
            <Grid item xs={12} >
                <Typography variant="h3" align="center" gutterBottom>
                    {prod.produtcname}
                </Typography>
            </Grid>

            <Grid item xs={10} sm={12} className={classes.marginTop1}>
                <Typography variant="h6" align="center" gutterBottom>
                    {prod.poductsubhead}
                </Typography>
            </Grid>

            <Grid item xs={12} className={classes.conteinerDefinicao}>

                <Grid item xs={6} className={classes.conteinerDefinicaoimg} >

                    <Grid item xs={6} className={classes.conteinerDefinicaoimg} >
                        <CardMedia
                            component="img"
                            className={classes.cardMedia}
                            image={prod.produtcfile}
                            title="Image title"
                        />
                    </Grid>
                    <Grid item xs={6} className={classes.conteinerDefinicaoimg} >
                        <CardMedia
                            component="img"
                            className={classes.cardMedia}
                            image={prod.produtcfile}
                            title="Image title"
                        />
                    </Grid>

                </Grid>





                <Grid item xs={6} className={classes.conteinerDefinicaoimg}>
                    
                    <Grid item xs={12}  >
                        <Typography variant="h4" align="left"  gutterBottom>
                            {prod.produtcname}
                        </Typography>
                    </Grid>


                    <Grid item xs={12} className={classes.gridItemPriceCompra} >

                        <Chip label={`R$ ${prod.price}`} className={classes.fontSize} variant="outlined" icon={<LocalOfferIcon />} />

                        <div className={classes.divMarging}>
                            <Link className={classes.btn} href={prod.linkbuy}>
                                <Button variant="contained" color="primary"
                                    startIcon={<AddShoppingCartIcon />}
    
                                >
                                    Comprar agora 
                                </Button>

                                {/* <IconButton color="primary" aria-label="add to shopping cart">
                                    <AddShoppingCartIcon />
                                </IconButton> */}

                            </Link>

                            <Fab size="small" aria-label="edit" >
                                <img src="https://imagepng.org/wp-content/uploads/2017/08/WhatsApp-icone.png" alt="whatsapp" className={classes.fabbtn}/>
                            </Fab>
                        </div>
                    </Grid>

                    <Grid item xs={12} className={classes.marginTop1} >
                        <TextField
                            id="outlined-multiline-static"
                            fullWidth 
                            multiline
                            defaultValue={prod.produtcdescription}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} className={classes.marginTop1} >
                        
                        {/* <Link className={classes.btn} href={prod.linkbuy}>
                            <Button variant="contained" color="primary" className={classes.btn}>
                                Comprar
                            </Button>
                        </Link> */}

                    </Grid>


                </Grid>
        
            </Grid>



        </Grid>
    </React.Fragment>
  );
}