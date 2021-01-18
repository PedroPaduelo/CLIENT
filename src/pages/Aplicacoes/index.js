import  React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import GetAppIcon from '@material-ui/icons/GetApp';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import api from '../../services/api';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2)
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


export default function Aplicacoes() {
  const classes = useStyles();
  const [app, setapp] = useState([])


  useEffect(() => {
    async function getApp() {
      try {
        const { data } = await api.get(`/aplicacao`);
        setapp(data);
      } catch (error) {
        console.log(error)
      }
    }
    getApp()
  },[]);


  return (
    app.map((app, i) => (<Card key={i} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            M
          </Avatar>
        }
        action={
          <Link to={`/Pricing/${app.id}`}>
            <IconButton aria-label="settings">
              <GetAppIcon/>
            </IconButton>
          </Link>
        }
        title={app.apptitle}
        subheader={app.created_at}
      />
      <CardMedia
        className={classes.media}
        image={app.appimagecapa}
        title={app.appimagecapatitle}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {app.appdescbreve}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>

        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions>
      
    </Card>
    ))
      

  );
}