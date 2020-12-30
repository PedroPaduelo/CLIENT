import React, { useState , useEffect } from 'react';
import { Link } from "react-router-dom";


import clsx from 'clsx';
import { makeStyles, createMuiTheme , ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import { red } from '@material-ui/core/colors';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

import {
  Switch,
  Route
} from "react-router-dom";


import { secondaryListItems } from './listItems';

import { useAuth }   from "../../services/authContexto";
import { useHistory } from 'react-router-dom';


import api from '../../services/api';


const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  userLogado:{
    marginLeft: "1rem"
  },

  iconButton:{
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundColor: red[500],
  },

}));













export default function Dashboard() {
  const userKey = 'user_nommand'
  const classes = useStyles();
  const auth = useAuth();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem(userKey))


  const [open, setOpen] = React.useState(true);
  const [rotas, setrotas] = useState([]);
  const [idAplicacao] = React.useState(1);

  

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  function desLogar(){
      auth.signout()
      history.push('/')
  } 

  
  useEffect(() => {
    const {email} =  JSON.parse(localStorage.getItem(userKey))
    async function getItems() {
      try {
        const { data } = await api.get(`/rota/${idAplicacao}/${email}`);
        setrotas(data);
      } catch (error) {
        alert("Ocorreu um erro ao buscar os items");
      }
    }
    getItems();
  },[idAplicacao]);


  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Nommand
          </Typography>


          <IconButton color="inherit" className={classes.iconButton}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon /> 
            </Badge>
          </IconButton>

          <IconButton color="inherit" onClick={desLogar} className={classes.iconButton}>
            <Icon  className="fas fa-sign-out-alt"> sign out  </Icon>
          </IconButton>
          
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Avatar className={classes.avatar}>
            M
          </Avatar>
          <Typography  noWrap className={classes.userLogado}> {user.fistName}   {user.lastName} </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        
          <List>
            {rotas.map((route, i) => (
              <Link to={route.path}>
                  <ListItem button>
                      <ListItemIcon>
                          <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText primary={route.name}/>
                  </ListItem>
              </Link>
            ))}
          </List>
        <Divider />
        <List>
          <Link to="/Painel_Nommand/Aplicacoes">
              <ListItem button>
                  <ListItemIcon>
                      <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Painel Principal"/>
              </ListItem>
          </Link>
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            
                  <Switch>
                    {rotas.map((route, i) => (
                      <Route key={i} component={require(""+ route.componente).default} {...route}/>
                    ))}
                  </Switch>
            
            </Grid>


          <Box pt={4}>
            <Copyright />
          </Box>


        </Container>
      </main>
    </div>
    </ThemeProvider>
  );
}