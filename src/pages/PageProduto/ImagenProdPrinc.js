import React from 'react';

import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  cardMedia: { 
    borderRadius: "8px",
    width: "90%",
  },

  conteinerImgSelect:{
    display: 'flex',
    padding: "1rem",
    justifyContent: "center"
  },
  
}));


export default function Album({imgselect}) {
  const classes = useStyles();

  return (
    <React.Fragment>
     
        <Grid item xs={12} className={classes.conteinerImgSelect} >
            <CardMedia
                component="img"
                className={classes.cardMedia}
                image={imgselect}
                title="Image title"
            />
        </Grid>
        
    </React.Fragment>
  );
}