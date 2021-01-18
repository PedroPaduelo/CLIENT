import  React, { useContext } from 'react';
import { useHistory, Switch, Redirect } from "react-router-dom";
import { CssBaseline, Container, Grid, } from '@material-ui/core';

import { red } from '@material-ui/core/colors';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


import { Context } from '../../Context/AuthContext';

import CustomRoute from '../../services/CustomRoute'
import * as IndexPages from '../../pages/indexPages'

import Navbar from './Navbar';
import SideBar from './SideBar';


// FIM DAS IMPORTAÇÕE4S DE BIBLIOTECAS
const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  }
});

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
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
  icone: {
    fontSize: "2.5rem",
    color: "#3F51B5"
  },
  naveLink:{
    color: "#3F51B5"
  },
  listItemIcon:{
    width:"100%"
  }
}));



export default function Dashboard({id}) {
  const classes = useStyles();
  const history = useHistory();

  const { handleLogout, user, apps } = useContext(Context);
 
  function desLogar(){
    handleLogout()
      history.push('/')
  } 

  return (
    <ThemeProvider theme={theme}>

      { user &&
      
        <div className={classes.root}>
         
          <CssBaseline />
          <SideBar nameApp={user.nomeorganizacao} deslogar={desLogar} classes={classes}  />
          <Navbar rotas={apps[id].rotas} user={user} classes={classes} />


          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                
                <Switch>
                  <CustomRoute exact isPrivate path={"/"} component={IndexPages["CadPaciente"] } redirectTO={"/"}/>
                  
                  {apps[id].rotas.map((route, i) => {
                      return <CustomRoute key={i} exact isPrivate path={route.path} component={IndexPages[route.componente]} redirectTO={"/"}/> 
                  })}

                  <CustomRoute path="*">
                    <Redirect from={"/"} to={apps[id].rotas[0].path} />
                  </CustomRoute>
                  
                </Switch>
              
              </Grid>
            </Container>
          </main>



        </div>
      }
      
    </ThemeProvider>
  );
}