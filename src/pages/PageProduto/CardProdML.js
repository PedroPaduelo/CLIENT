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
    marginRight: theme.spacing(0),
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
  },
  cardMedia: { 
    borderRadius: "15px",
    marginBottom: "4rem"
  },
  
  fontSize: {
    fontSize: "2rem",
    marginTop: "0.3rem"
  },
  conteinerDefinicao: {
    display: "flex",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column"
    },
  },

  
  conteinerDefinicaoimg: {
    marginTop: "1rem",
    padding: "1rem"
  },
  
  gridItemPriceCompra:{
    justifyContent: 'space-between',
    display: 'flex',
    marginTop: "2rem",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column"
    },
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
  },
  textFieldline: {
        content: "none",
  }
}));


export default function Album({prod}) {
    const classes = useStyles();


    ReactGA.initialize(prod.produtcfile, {debug : true });
    ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <React.Fragment>
        <Grid
            spacing={1}
            className={classes.cardContent}
        >
            
            <Grid item xs={12} >
                <Typography variant="h3" align="center" >
                    {prod.produtcname}
                </Typography>
            </Grid>
            
            <Grid item xs={10} sm={12} className={classes.marginTop1}>
                <Typography variant="h6" align="center" >
                    {prod.poductsubhead}
                </Typography>
            </Grid>

            <Grid item xs={12} sm={8} md={12} className={classes.conteinerDefinicao}>


                <Grid item xs={12} sm={8} md={6} className={classes.conteinerDefinicao} >

                    <Grid item xs={12}  sm={3} className={classes.conteinerDefinicaoimg} >
                        <Grid item xs={12}>
                            <CardMedia
                                component="img"
                                className={classes.cardMedia}
                                image={prod.produtcfile}
                                title="Image title"
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12}  sm={9} className={classes.conteinerDefinicaoimg} >
                        <CardMedia
                            component="img"
                            className={classes.cardMedia}
                            image={prod.produtcfile}
                            title="Image title"
                        />
                    </Grid>

                </Grid>




                <Grid item xs={12} sm={8} md={6} className={classes.conteinerDefinicaoimg}>
                    
                    <Grid item xs={12}  >
                        <Typography variant="h4" align="left"  gutterBottom>
                            {prod.produtcname}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} className={classes.gridItemPriceCompra} >

                        <Chip label={`R$ ${prod.price}`} className={classes.fontSize} variant="outlined" icon={<LocalOfferIcon />} />

                        <div className={classes.divMarging}>
                            <Link className={classes.btn} href={prod.linkbuy}>
                                <Button variant="contained" color="primary"
                                    startIcon={<AddShoppingCartIcon />}
    
                                >
                                    Comprar agora 
                                </Button>
                            </Link>
                        </div>
                    </Grid>

                    <Grid item xs={12} className={classes.marginTop1} >
                        <TextField
                            id="outlined-multiline-static"
                            fullWidth 
                            multiline
                            defaultValue={prod.produtcdescription}
                            className={classes.textFieldline}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} className={classes.gridItemPriceCompra} >
                        <Link className={classes.btn} href={prod.linkbuy}>
                            <Button variant="contained" color="primary"
                                startIcon={<AddShoppingCartIcon />}
                            >
                                Comprar agora 
                            </Button>
                        </Link>

                        <Link className={classes.btn} href={`https://api.whatsapp.com/send?phone=55${prod.whatsvendedor}`} target="_blank">
                            <Fab size="small" aria-label="edit" >
                                <img src="https://imagepng.org/wp-content/uploads/2017/08/WhatsApp-icone.png" alt="whatsapp" className={classes.fabbtn}/>
                            </Fab>
                        </Link>
                    </Grid>
                
                </Grid>

            </Grid>
            
        </Grid>
    </React.Fragment>
  );
}