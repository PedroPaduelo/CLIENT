import React, {useState, useEffect} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import ReactGA from 'react-ga';

import Header from './Header';
import ImagensProd from './ImagensProd';
import ImagenProdPrinc from './ImagenProdPrinc';


const useStyles = makeStyles((theme) => ({
    cardContent: {
        marginTop: "1rem"
    },
    

    conteiner:{
        display: "flex",

        [theme.breakpoints.down('sm')]: {
            flexDirection: "column"
        },
    },

    conteinerImgs:{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",

        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            justifyContent: "center",
        },
    },

    fontSize: {
        fontSize: "2rem",
        marginTop: "0.3rem"
    },


    conteinerDescPriceCompra: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column"
        },
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
    
    textFieldline: {
            content: "none",
    }

}));


export default function Album({prod}) {
    const classes = useStyles();

    // ReactGA.initialize(prod.produtcfile);
    // ReactGA.pageview(window.location.pathname + window.location.search);

    const [ imgselect, simgselect ] = useState();
    
    useEffect(()=>{
      simgselect(prod.img1)
    },[prod])





  return (
    <React.Fragment>
        <Grid
          className={classes.cardContent}
        >

            <Header 
                produtcname={prod.produtcname} 
                poductsubhead={prod.poductsubhead}
            />

            <Grid item xs={12} className={classes.conteiner}>

                <Grid item xs={12} sm={12} md={6} className={classes.conteinerImgs} >
                    <ImagensProd 
                        img1={prod.img1}
                        img2={prod.img2}
                        img3={prod.img3}
                        simgselect={simgselect}
                    />

                    <ImagenProdPrinc 
                        imgselect={imgselect}
                    />
                </Grid>



              <Grid item xs={12} sm={12} md={6} className={classes.conteinerDescPriceCompra}>
                  
                <Grid item xs={12}>
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
                        </Link>
                    </div>
                </Grid>

                <Grid item xs={12} className={classes.marginTop1} >
                  <TextField
                    id="outlined-multiline-static"
                    fullWidth 
                    multiline
                    defaultValue={prod.produtcdescription1}
                    className={classes.textFieldline}
                    InputProps={{
                        readOnly: true,
                    }}
                  />
                </Grid>

                { prod.produtcdescription2 &&
                  <Grid item xs={12} className={classes.marginTop1} >
                    <TextField
                      id="outlined-multiline-static"
                      fullWidth 
                      multiline
                      defaultValue={prod.produtcdescription2}
                      className={classes.textFieldline}
                      InputProps={{
                          readOnly: true,
                      }}
                    />
                  </Grid>
                }

                { prod.produtcdescription3 &&
                  <Grid item xs={12} className={classes.marginTop1} >
                    <TextField
                      id="outlined-multiline-static"
                      fullWidth 
                      multiline
                      defaultValue={prod.produtcdescription3}
                      className={classes.textFieldline}
                      InputProps={{
                          readOnly: true,
                      }}
                    />
                  </Grid>
                }

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