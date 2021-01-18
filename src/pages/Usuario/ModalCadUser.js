import React, {useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Context } from '../../Context/AuthContext';

import api from '../../services/api';
import TabelaCheck from './TabelaCheck';







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





export default function MaxWidthDialog({slodin,lodin}) {
  const classes = useStyles();
  const { user } = useContext(Context);

  const [open, setOpen] = React.useState(false);

  const [email, semail ] = React.useState("");
  const [password, setpassword] = React.useState('');
  const [fistname, setfistName] = React.useState("");
  const [lastname, setlastName] = React.useState("");
  const [status, setstatus] = React.useState("");
  const [tipouser, settipouser] = React.useState("");
  const [capacituser, setcapacituser] = React.useState(0);


  const [checked, setChecked] = React.useState([]);
  const [listStatus, setListStatus] = React.useState([]);
  const [listTipoUser, setlistTipoUser] = React.useState([]);


  useEffect(() => {

    async function getListUserState() {
      try {
        const { data } = await api.get(`/ListUserState`);
        setListStatus(data);
      } catch (error) {
      }
    }

    async function ListUserTipo() {
      try {
        const { data } = await api.get(`/ListUserTipo`);
        setlistTipoUser(data);
      } catch (error) {
      }
    }

    ListUserTipo();
    getListUserState();

  },[]);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  async function cadastrarUser(){

    let servicos

    servicos = checked.map(row => {

      const [ id_servicos , id_app] = row.split('-');

      return {
        email_user: email,
        id_app,
        id_servicos,
        id_org: user.id_org
      }
    })

    if(servicos.length > 0 ){
      const { data } = await api.post(`/CreateUserIntoOrg`, {
                                                email,
                                                password,
                                                fistname,
                                                lastname,
                                                status: status ,
                                                tipouser: tipouser,
                                                capacituser,
                                                id_org: user.id_org,
                                                servicos
                                            });
      if( data ){
          slodin(!lodin)
          setOpen(false)
      }
    }


  }

  return (
    <React.Fragment>

      <Tooltip title="Adicionar um usuário" aria-label="add"  placement="right">
        <Fab color="primary" size="small" onClick={handleClickOpen} aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >

        <DialogTitle id="max-width-dialog-title">
          {fistname === "" ? "Nome do Usuário" : fistname +" "+ lastname}
        </DialogTitle>

        <DialogContent>
          

          <form className={classes.form} noValidate>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={12}>
                    <TextField
                        size="small"
                        name="email"
                        variant="outlined"
                        fullWidth
                        id="email"
                        label="Email"
                        type="text"
                        autoFocus
                        value={email}
                        onChange={(e)=>{semail(e.target.value)}}
                    />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <TextField
                    size="small"
                    variant="outlined"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e)=>{setpassword(e.target.value)}}
                  />
                </Grid>


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


                <Grid item xs={12} sm={4}>
                    <TextField
                        InputLabelProps={{
                        shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                        required
                        id="tipouser"
                        name="tipouser"
                        label="Status"
                        fullWidth
                        select
                        value={status}
                        SelectProps={{
                        native: true,
                        }}
                        onChange={(e)=>{setstatus(e.target.value)}}
                    >
                        <option  value="">
                        </option >

                        {listStatus.map(item =>{
                          return(
                            <option key={item.id} value={item.id}>
                              {item.descstatus}
                            </option >
                          )
                        })}
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextField
                        InputLabelProps={{
                        shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                        required
                        id="tipouser"
                        name="tipouser"
                        label="Perfil"
                        fullWidth
                        select
                        value={tipouser}
                        SelectProps={{
                        native: true,
                        }}
                        onChange={(e)=>{settipouser(e.target.value)}}
                    >
                        <option  value="">
                        </option >

                        {listTipoUser.map(item =>{
                          return(
                            <option key={item.id} value={item.id}>
                              {item.desctipouser}
                            </option >
                          )
                        })}
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextField
                        size="small"
                        variant="outlined"
                        fullWidth
                        name="capacit"
                        label="Capacit"
                        type="number"
                        id="capacit"
                        value={capacituser}
                        onChange={(e)=>{setcapacituser(e.target.value)}}
                    />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <TabelaCheck setChecked={setChecked} checked={checked} dados={user.apps} />
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
              onClick={()=> {cadastrarUser()}}
            >
              Salvar
            </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
