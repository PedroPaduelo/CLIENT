import React from 'react';

import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    gridSelectImg: {
        display: 'flex',
        flexDirection: "column",
        paddingTop: "1rem",
        marginLeft: "1rem",
        height: "80%",
        
        
        
        [theme.breakpoints.down('sm')]: {
            flexDirection: "row",
            padding: "1rem",
            marginLeft: "0rem",
        },
    },

    gridImgItem: {
        display: 'flex',
        flexDirection: "column",
        maxWidth: "30rem",
        
 
       

        [theme.breakpoints.down('sm')]: {
            flexDirection: "row",
            maxWidth: "15rem",
            padding: "0.3rem"
        },
    },

    cardImg: { 
        borderRadius: "8px",
    },
 

}));


export default function Album({img1, img2, img3, simgselect}) {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Grid item xs={12} sm={12} md={2} className={classes.gridSelectImg}>
            { img1 &&       
                <Grid item xs={12} className={classes.gridImgItem}>
                    <CardMedia
                        component="img"
                        className={classes.cardImg}
                        image={img1}
                        title="Image title"
                        onClick={() => {simgselect(img1)}}
                    />
                </Grid>
            }

            { img2 &&
                <Grid item xs={12} className={classes.gridImgItem}>
                    <CardMedia
                        component="img"
                        className={classes.cardImg}
                        image={img2}
                        title="Image title"
                        onClick={() => {simgselect(img2)}}
                    />
                </Grid>
            }

            { img3 && 
                <Grid item xs={12} className={classes.gridImgItem}>
                    <CardMedia
                        component="img"
                        className={classes.cardImg}
                        image={img3}
                        title="Image title"
                        onClick={() => {simgselect(img3)}}
                    />
                </Grid>
            }
        </Grid>
    </React.Fragment>
  );
}