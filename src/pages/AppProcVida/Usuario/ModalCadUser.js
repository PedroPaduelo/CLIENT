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



import { Context } from '../../../Context/AuthContext';
import api from '../../../services/api';


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
  const [app, sapp] = React.useState("");

  const [listaApp, slistaApp] = React.useState([]);
  const [listarotasapp, slistarotasapp] = React.useState([]);

  const [selectionRows, setSelection] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function getItems() {
      try {
        const { data } = await api.post(`/ListUserApp`, {email_user: user.email });
        slistaApp(data)
      } catch (error) {
        alert("Ocorreu um erro ao buscar os items");
      }
    }
    getItems();
  },[]);


  async function getRotasApp(e){
    const id_aplicacoes =  e.target.value
    sapp(id_aplicacoes)
    
    const { data } = await api.post(`/ListUserAppRouts`, {email_user: user.email ,
                                                          id_aplicacoes: id_aplicacoes});
         slistarotasapp(data)
  }
  




  async function cadastrarUser(){
    


    let relacionamentoAppRout

    relacionamentoAppRout = selectionRows.map(row => {
      return {
        email_user: email,
        id_aplicacoes: app,
        id_rotas: row,
        created_at: "2020-01-03"
      }
    })

    console.log(relacionamentoAppRout)

    const st =  status === "Ativo" ? 1 : 0

    if(relacionamentoAppRout.length > 0 ){

      const { data } = await api.post(`/CreateUserApp`, {
                                                email,
                                                password,
                                                fistname,
                                                lastname,
                                                status: st,
                                                tipouser,
                                                capacituser,
                                                listRelacionamento: relacionamentoAppRout
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
                        <option  value="Ativo">
                          Ativo
                        </option >

                        <option  value="Inativo">
                          Inativo
                        </option >
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
                        <option  value="adm">
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
                        name="capacit"
                        label="Capacit"
                        type="number"
                        id="capacit"
                        value={capacituser}
                        onChange={(e)=>{setcapacituser(e.target.value)}}
                    />
                </Grid>



                <Grid item xs={12} sm={12}>
                    <TextField
                        InputLabelProps={{
                        shrink: true,
                        }}
                        variant="outlined"
                        size="small"
                        required
                        id="tipouser"
                        name="tipouser"
                        label="Aplicação"
                        fullWidth
                        select
                        value={app}
                        SelectProps={{
                        native: true,
                        }}
                        onChange={getRotasApp}
                    >
                        <option  value="">
                            Selecionar
                        </option >

                        { listaApp.map(app =>{
                          return <option key={app.id_aplicacoes}  value={app.id_aplicacoes}>
                                    {app.apptitle}
                                  </option >
                          })
                        }
                    </TextField>
                </Grid>

                

                <Grid item xs={12} sm={12}>
                  <TabelaCheck setSelection={setSelection} dados={listarotasapp} />
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
