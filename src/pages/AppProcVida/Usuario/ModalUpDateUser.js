import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';



import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import api from '../../../services/api';


const useStyles = makeStyles((theme) => ({
     form: {
        width: '100%', 
        justifyContent: "center",
        alignContent: "center",
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      palette: {
        backgroundColor: '#e65100',
        color: '#fff',
        "&:hover": {
          backgroundColor: '#ef6c00',
        }
      },
}));

export default function MaxWidthDialog({dados, slodin, lodin}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [email, ] = React.useState(dados.email || "");
  const [fistname, setfistName] = React.useState(dados.fistname || "");
  const [lastname, setlastName] = React.useState(dados.lastname || "");
  const [status, setstatus] = React.useState(dados.status || "");
  const [tipouser, settipouser] = React.useState(dados.tipouser || "");
  const [capacituser, setcapacituser] = React.useState(dados.capacituser || 0);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  async function signupUser(){
   
    const st =  status === "Ativo" ? 1 : 0
    const { data } = await api.put(`/user`, {
                                                email,
                                                fistname,
                                                lastname,
                                                status: st,
                                                tipouser,
                                                capacituser
                                            });
                                            slodin(!lodin)
    if( data ){
        setOpen(false)
    }


  }



  return (
    <React.Fragment>
      <Fab className={classes.palette} aria-label="edit" size="small" onClick={handleClickOpen} >
        <EditIcon />
      </Fab>

      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >

        <DialogTitle id="max-width-dialog-title">
            {dados.fistname} {dados.lastname}
        </DialogTitle>



        <DialogContent>

          

          <form className={classes.form} noValidate>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                    <TextField
                        size="small"
                        name="firstName"
                        variant="outlined"
                        fullWidth
                        id="firstName"
                        label="Primeiro Nome"
                        type="text"
                        autoFocus
                        value={fistname}
                        onChange={(e)=>{setfistName(e.target.value)}}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        size="small"
                        variant="outlined"
                        fullWidth
                        id="lastName"
                        label="Sobre Nome"
                        name="lastName"
                        type="text"
                        value={lastname}
                        onChange={(e)=>{setlastName(e.target.value)}}
                    />
                </Grid>

               

                <Grid item xs={12} sm={3}>
                    <TextField
                        InputLabelProps={{
                        shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                        required
                        id="tipouser"
                        name="tipouser"
                        label="Perfil do Usuário"
                        fullWidth
                        select
                        value={status}
                        SelectProps={{
                        native: true,
                        }}
                        onChange={(e)=>{setstatus(e.target.value)}}
                    >
                        <option  value="Ativo">
                            ATIVO
                        </option >

                        <option  value="Inativo">
                            INATIVO
                        </option >
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <TextField
                        InputLabelProps={{
                        shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                        required
                        id="tipouser"
                        name="tipouser"
                        label="Perfil do Usuário"
                        fullWidth
                        select
                        value={tipouser}
                        SelectProps={{
                        native: true,
                        }}
                        onChange={(e)=>{settipouser(e.target.value)}}
                    >
                        <option  value="Adm">
                          Adm
                        </option >

                        <option  value="Atendente">
                          Atendente
                        </option >
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextField
                        size="small"
                        variant="outlined"
                        fullWidth
                        name="capacituser"
                        label="Capacidade de atendimento"
                        type="text"
                        id="capacituser"
                        value={capacituser}
                        onChange={(e)=>{setcapacituser(e.target.value)}}
                    />
                </Grid>
            </Grid>
          </form>
        </DialogContent>

        <DialogActions>
            <Button
              type="button"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=> {signupUser()}}
            >
              Salvar
            </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
