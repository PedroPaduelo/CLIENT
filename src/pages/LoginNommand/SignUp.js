import React, { useState, useContext } from 'react';

import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Context } from '../../Context/AuthContext';
import Alert  from '../../components/Alert';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://nommand.com.br/">
        nommand.com.br
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  }
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#297bff"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




export default function SignUp() {

  const {handleSignup, loading } = useContext(Context);

  const history = useHistory();
  const classes = useStyles();

  const [alerta, salerta] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    mensagem: "",
    type: ""
  });


  const [fistname, setfistname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [nomeorganizacao, snomeorganizacao] = useState('');



  async function signupUser(){
    if( 
        fistname !== "" &&
        lastname !== "" &&
        email !== "" &&
        password !== "" &&
        nomeorganizacao !== ""
     ){
      const result = await handleSignup({
        fistname ,
        lastname ,
        email ,
        password,
        nomeorganizacao
      })

      salerta({
        open: true,
        vertical: 'top',
        horizontal: 'center',
        mensagem: result.mensagem,
        type: result.statusAlaerty
      })

      if(result.redirect)
      history.push('/')

    }else{
      salerta({
        open: true,
        vertical: 'top',
        horizontal: 'center',
        mensagem: "Favor Preencer todos os campos!!!",
        type: "info"
      })

    }
    
  }


  return (
    <ThemeProvider theme={theme}>

      {!loading &&
      <Alert alerta={alerta} handleClose={() => salerta({
          open: false,
          vertical: 'top',
          horizontal: 'center',
          mensagem: "",
          type: ""
      })}  />
      }
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={fistname}
                  onChange={(e)=>{setfistname(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="lname"
                  value={lastname}
                  onChange={(e)=>{setlastname(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=>{setemail(e.target.value)}}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e)=>{setpassword(e.target.value)}}
                />
              </Grid>


              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="nomeorganizacao"
                  label="Nome da organização"
                  type="nomeorganizacao"
                  id="nomeorganizacao"
                  autoComplete="current-password"
                  value={nomeorganizacao}
                  onChange={(e)=>{snomeorganizacao(e.target.value)}}
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={signupUser}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                 Ja possui uma conta? Entre aqui
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>

        <Box mt={5}>
          <Copyright />
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}