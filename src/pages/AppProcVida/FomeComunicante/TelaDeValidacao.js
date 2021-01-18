import React, {useState} from 'react';
import { useParams } from "react-router-dom";


import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      nommand.com.br
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




export default function SignIn({...props}) {
  const classes = useStyles();
  let { id_paciente } = useParams();

  const [id_do_paciente, sid_do_paciente] = useState(id_paciente);
  const [cod_acesso, scod_acesso] = useState();


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Formulario epdemiologico Covid-19
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="id"
            label="ID do Paciente"
            name="id"
            autoComplete="id"
            autoFocus
            value={id_do_paciente}
            onChange={(e)=>{sid_do_paciente(e.target.value)}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="codigo"
            label="Codigo de Acesso"
            type="codigo"
            id="codigo"
            autoComplete="current-password"
            value={cod_acesso}
            onChange={(e)=>{scod_acesso(e.target.value)}}
          />

          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => props.validarCredenciais(id_do_paciente,cod_acesso)}
            className={classes.submit}
          >
            Entrar
          </Button>
          {props.children}
        </form>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}