import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

import { Link } from "react-router-dom";


import ProcVida from "../../assets/images/Capa Apps/ProcVida.png"
import whatsapp from "../../assets/images/Capa Apps/whatsapp.jpg"
import typeForme from "../../assets/images/Capa Apps/typeForme.png"


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginRight: theme.spacing(4)
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  gird:{
    display: 'flex'
    
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expandedProcVida, setexpandedProcVida] = React.useState(false);
  const [expandedwhatsapp, setEexpandedwhatsapp] = React.useState(false);
  const [expandedTypeForme, setexpandedTypeForme] = React.useState(false);

  const handleExpandClick = () => {
    setexpandedProcVida(!expandedProcVida);
  };
  const handleExpandClick2 = () => {
    setEexpandedwhatsapp(!expandedwhatsapp);
  };

  const handleExpandClick3 = () => {
    setexpandedTypeForme(!expandedTypeForme);
  };

  return (
    <Grid item xs={12} md={12} lg={12} className={classes.gird}>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              M
            </Avatar>
          }
          action={
        
              <Link to="/Painel_ProcVida">
                <IconButton aria-label="settings">
                  <Icon className="fas fa-sign-in-alt" ></Icon>
                </IconButton>
              </Link>
          }
          title="Aplicação da ProcVida"
          subheader="December 30, 2020"
        />
        <CardMedia
          className={classes.media}
          image={ProcVida}
          title="Paella dish"
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            ProcVida e uma aplicação voltada ao cuidado com a tecnologia envolvida dos paciente da rede publica de saude. 
          </Typography>
        </CardContent>

        <CardActions disableSpacing>

          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expandedProcVida,
            })}
            onClick={handleExpandClick}
            aria-expanded={expandedProcVida}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        
        <Collapse in={expandedProcVida} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              ddddd
            </Typography>
            <Typography paragraph>
              fffff
            </Typography>
            <Typography paragraph>
              fffff
            </Typography>
            <Typography>
            ggggg
            </Typography>
          </CardContent>
        </Collapse>
      
      </Card>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              M
            </Avatar>
          }
          action={
              <Link to="/Painel_ProcVida">
                <IconButton aria-label="settings">
                  <Icon className="fas fa-sign-in-alt" ></Icon>
                </IconButton>
              </Link>
          }
          title="Aplicação da WhatsSapp"
          subheader="December 30, 2020"
        />
        <CardMedia
          className={classes.media}
          image={whatsapp}
          title="Paella dish"
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Faz gestão de mensagems enviadas e recebidas, disparos em massa e de facil integração. 
          </Typography>
        </CardContent>

        <CardActions disableSpacing>

          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expandedwhatsapp,
            })}
            onClick={handleExpandClick2}
            aria-expanded={expandedwhatsapp}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        
        <Collapse in={expandedwhatsapp} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              ddddd
            </Typography>
            <Typography paragraph>
              fffff
            </Typography>
            <Typography paragraph>
              fffff
            </Typography>
            <Typography>
            ggggg
            </Typography>
          </CardContent>
        </Collapse>
      
      </Card>
      
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              M
            </Avatar>
          }
          action={
              <Link to="/Login_Forme">
                <IconButton aria-label="settings">
                  <Icon className="fas fa-sign-in-alt" ></Icon>
                </IconButton>
              </Link>
          }
          title="Type Forme"
          subheader="December 30, 2020"
        />
        <CardMedia
          className={classes.media}
          image={typeForme}
          title="Paella dish"
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Type forme inteligente rendereizado apartir de perguntas previamente cadastradas! 
          </Typography>
        </CardContent>

        <CardActions disableSpacing>

          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expandedTypeForme,
            })}
            onClick={handleExpandClick3}
            aria-expanded={expandedTypeForme}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        
        <Collapse in={expandedTypeForme} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              ddddd
            </Typography>
            <Typography paragraph>
              fffff
            </Typography>
            <Typography paragraph>
              fffff
            </Typography>
            <Typography>
            ggggg
            </Typography>
          </CardContent>
        </Collapse>
      
      </Card>

    </Grid>
  );
}