import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  marginTop1: {
    marginTop: "0.1rem"
  }
}));


export default function HeaderProd({produtcname, poductsubhead}) {
    const classes = useStyles();
  return (
    <React.Fragment>
        <Grid item xs={12} >
            <Typography variant="h3" align="center" >
                {produtcname}
            </Typography>
        </Grid>

        <Grid item xs={12} className={classes.marginTop1}>
            <Typography variant="h6" align="center" >
                {poductsubhead}
            </Typography>
        </Grid>
    </React.Fragment>
  );
}