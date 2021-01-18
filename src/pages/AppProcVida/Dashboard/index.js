import  React, { useContext, useState } from 'react';
import { useHistory, Switch, Redirect } from "react-router-dom";
import { CssBaseline, Container, Grid, } from '@material-ui/core';

import { red } from '@material-ui/core/colors';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { Context } from '../../../Context/AuthContext';

import CustomRoute from '../../../services/CustomRoute'
import * as IndexPages from '../indexPages'

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
    flexWrap: "wrap",
    flexGrow: 1,
    height: '100vh',
    overflow: "auto",
  },


  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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

  const { handleLogout, user } = useContext(Context);

  const [ loadingRotas ] = useState(true)

  // useEffect(() => {
  //   async function getRouts(){
  //     await handleRouts(id,user.email)
  //     setloadingRotas(true)
  //   } 

  //   if(!user){
  //   }else{
  //     getRouts()
  //   }
  // }, [user,id]);


  function desLogar(){
    handleLogout()
      history.push('/')
  } 

                
  

 const rotass = [
    {
      "email_user": "pedropaduelo@gmail.com",
      "id_rotas": 1,
      "path": "/ProcVida/CadPaciente",
      "name": "CadPaciente",
      "componente": "Aplicacoes",
      "icone": "fas fa-user-nurse"
    },
    {
      "email_user": "pedropaduelo@gmail.com",
      "id_rotas": 2,
      "path": "/ProcVida/Paciente",
      "name": "Paciente",
      "componente": "Dashboard",
      "icone": "fas fa-th-list"
    },
    {
      "email_user": "pedropaduelo@gmail.com",
      "id_rotas": 4,
      "path": "/ProcVida/Dashboard",
      "name": "Dashboard",
      "componente": "Relatorios",
      "icone": "far fa-chart-bar"
    },
    {
      "email_user": "pedropaduelo@gmail.com",
      "id_rotas": 6,
      "path": "/ProcVida/FomeComunicante",
      "name": "FomeComunicante",
      "componente": "Dashboard",
      "icone": "far fa-list-alt"
    },
    {
      "email_user": "pedropaduelo@gmail.com",
      "id_rotas": 7,
      "path": "/ProcVida/FormePacienteIndex",
      "name": "FormePacienteIndex",
      "componente": "RalarorioPaciente",
      "icone": "far fa-list-alt"
    },
    {
      "email_user": "pedropaduelo@gmail.com",
      "id_rotas": 8,
      "path": "/ProcVida/Tratativas",
      "name": "Tratativas",
      "componente": "RalarorioDisparos",
      "icone": "fas fa-clipboard-list"
    },    
    {
      "email_user": "pedropaduelo@gmail.com",
      "id_rotas": 5,
      "path": "/ProcVida/ExportBases",
      "name": "ExportBases",
      "componente": "CadPaciente",
      "icone": "fas fa-scroll"
    },
    {
      "email_user": "pedropaduelo@gmail.com",
      "id_rotas": 9,
      "path": "/ProcVida/ImpotacaoExceCSV",
      "name": "ImpotacaoExceCSV",
      "componente": "InputForme",
      "icone": "fas fa-scroll"
    },
    {
      "email_user": "pedropaduelo@gmail.com",
      "id_rotas": 9,
      "path": "/ProcVida/Usuario",
      "name": "Usuario",
      "componente": "InputForme",
      "icone": "fas fa-users"
    }
  ]


  return (
    <ThemeProvider theme={theme}>

      { loadingRotas &&
      
        <div className={classes.root}>
         
          <CssBaseline />
          <SideBar nameApp={"ProcVida"} deslogar={desLogar} classes={classes}  />
          <Navbar rotas={rotass} user={user} classes={classes} />

          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={2}>
                
                <Switch>
                  <CustomRoute exact isPrivate path={"/ProcVida/CadPaciente"} component={IndexPages["CadPaciente"] } redirectTO={"/"}/>
                  <CustomRoute exact isPrivate path={"/ProcVida/Paciente"} component={IndexPages["Paciente"] } redirectTO={"/"}/>
                  <CustomRoute exact isPrivate path={"/ProcVida/Dashboard"} component={IndexPages["Dashboard"] } redirectTO={"/"}/>
                  <CustomRoute exact isPrivate path={"/ProcVida/ExportBases"} component={IndexPages["ExportBases"] } redirectTO={"/"}/>
                  <CustomRoute exact isPrivate path={"/ProcVida/FomeComunicante"} component={IndexPages["FomeComunicante"] } redirectTO={"/"}/>
                  <CustomRoute exact isPrivate path={"/ProcVida/FormePacienteIndex"} component={IndexPages["FormePacienteIndex"] } redirectTO={"/"}/>
                  <CustomRoute exact isPrivate path={"/ProcVida/Tratativas"} component={IndexPages["Tratativas"] } redirectTO={"/"}/>
                  <CustomRoute exact isPrivate path={"/ProcVida/Usuario"} component={IndexPages["Usuario"] } redirectTO={"/"}/>
                  <CustomRoute exact isPrivate path={"/ProcVida/ImpotacaoExceCSV"} component={IndexPages["ImpotacaoExceCSV"] } redirectTO={"/"}/>

                  {/* {rotas.map((route, i) => {
                      return <CustomRoute key={i} exact isPrivate path={route.path} component={IndexPages[route.componente]} redirectTO={"/"}/> 
                  })} */}

                  <CustomRoute path="*">
                    <Redirect from={"/"} to={rotass[0].path} />
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