import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://nommand.com.br">
        www.nommand.com.br
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
    
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', 
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  display: {
    height: '100%',
    display: 'flex',
    
    justifyContent: "center",
    alignContent: "center"
  },

  conteinerDefinicao: {
    display: "flex",
    padding: theme.spacing(2),
    justifyContent: "center",
    alignItems: "center"
  },
}));

export default function Album({prod}) {
  const classes = useStyles();

  return (
    <React.Fragment>
        <CssBaseline />


        <main>
            <Container className={classes.cardGrid} >
                < Grid container spacing={4} className={classes.display} >
                    <Grid item xs={12} sm={6} md={6}>
                        <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={prod.produtcfile}
                            title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {prod.produtcname}
                            </Typography>
                            <Typography>
                                {prod.produtcdescription}
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.conteinerDefinicao}>
                            <Link className={classes.btn} href={prod.linkbuy}>
                                <Button variant="contained" color="primary" className={classes.btn}>
                                    Comprar
                                </Button>
                            </Link>
                        </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </main>


    
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Pages de produtos
            </Typography>

            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Uma pagina, varias experiencias
            </Typography>
            <Copyright />
        </footer>
 
    </React.Fragment>
  );
}