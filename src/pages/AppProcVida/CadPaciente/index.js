import React, { useState , useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

import Alert  from '../../../components/Alert';

import { makeStyles } from '@material-ui/core/styles';

import { mask , unMask } from 'remask'

import api, {apiCep} from '../../../services/api';

import { Context } from '../../../Context/AuthContext';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: "#fff",
    padding: theme.spacing(3),
    borderRadius: "1rem",
    webkitBoxShadow: "0px 2px 15px -1px rgba(97,97,97,1)",
    mozBoxShadow: "0px 2px 15px -1px rgba(97,97,97,1)",
    boxShadow: "0px 2px 15px -1px rgba(97,97,97,1)",
  },
  buttons: {
    width: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  title:{
    marginBottom: theme.spacing(4),
  }
}));


export default function AddressForm() {
  const { user } = useContext(Context);
  const [open, setOpen] = useState(false);

    const handleClose = () => {
      setOpen(false)
    };

  const classes = useStyles();
  const [firstname, sfirstname] = useState('');
  const [lastname, slastname] = useState('');
  const [sexo, ssexo] = useState('');
  const [datadenascimento, sdatadenascimento] = useState('');
  const [cpf, scpf] = useState('');
  const [namemother, snamemother] = useState('');
  const [celular, scelular] = useState('');
  const [telefoneresidencial, stelefoneresidencial] = useState('');
  const [cep, scep] = useState('');
  const [logradouro, slogradouro] = useState('');
  const [numero, snumero] = useState('');
  const [complemento, scomplemento] = useState('');
  const [bairro, sbairro] = useState('');
  const [localidade, slocalidade] = useState('');
  const [uf, suf] = useState('');
  const [datastartsintomas, sdatastartsintomas] = useState('');
  const [localdoteste, slocaldoteste] = useState('');
  const [datadottste, sdatadottste] = useState('');
  const [tipoteste, stipoteste] = useState('');
  const [resultadodoteste, sresultadodoteste] = useState('');

  const [alerta, salerta] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    mensagem: "",
    type: ""
  });


  function handleChangeCPF(e) {
    const valorOriginal = unMask(e.target.value)
    const valorComMscara = mask(valorOriginal, ["999.999.999-99"])
    scpf(valorComMscara);
  }
  function handleChangeCelular(e) {
    const valorOriginal = unMask(e.target.value)
    const valorComMscara = mask(valorOriginal, ["(99) 9999-9999", "(99) 9 9999-9999"])
    scelular(valorComMscara);
  }
  function handleChangeTelefoneResidencial(e) {
    const valorOriginal = unMask(e.target.value)
    const valorComMscara = mask(valorOriginal, ["(99) 9999-9999", "(99) 9 9999-9999"])
    stelefoneresidencial(valorComMscara);
  }
  async function handleChangeCep(e) {

    const valorOriginal = unMask(e.target.value)
    const valorComMscara = mask(valorOriginal, ["99999-999"])


    scep(valorComMscara)

    if(valorComMscara.length >= 9){
      const { data } = await apiCep.get(`/${e.target.value}/json`);
      const {bairro, localidade, logradouro, uf} = data

      if(data.erro){
        slogradouro("")
        sbairro("")
        slocalidade("")
        suf("")
        salerta({
          open: true,
          vertical: 'top',
          horizontal: 'center',
          mensagem: "Cep informado não existe na base dos correios!!!",
          type: "warning"
        })
        console.log("ERRO")
      }
      slogradouro(logradouro)
      sbairro(bairro)
      slocalidade(localidade)
      suf(uf)
    }
  }
  async function cadastrar(){
    if(firstname === "" || 
      lastname === "" || 
      sexo === "" || 
      datadenascimento === "" || 
      cpf === "" || 
      namemother === "" || 
      celular === "" || 
      telefoneresidencial === "" || 
      cep === "" || 
      logradouro === "" || 
      numero ==="" || 
      complemento ==="" || 
      bairro ==="" || 
      localidade ==="" || 
      uf ==="" || 
      datastartsintomas === "" || 
      localdoteste === "" || 
      datadottste === "" || 
      tipoteste === "" || 
      resultadodoteste === ""){
        salerta({
          open: true,
          vertical: 'top',
          horizontal: 'center',
          mensagem: "Favor Preencer todos os campos!!!",
          type: "info"
        })
    }else{
      setOpen(true)
      const {data} = await api.post(`/paciente`,{
        firstname ,
        lastname ,
        sexo ,
        datadenascimento ,
        cpf ,
        namemother ,
        celular ,
        telefoneresidencial ,
        cep ,
        logradouro ,
        numero ,
        complemento ,
        bairro ,
        localidade ,
        uf ,
        datastartsintomas ,
        localdoteste ,
        datadottste ,
        tipoteste ,
        resultadodoteste ,
        email_user: user.email
      });

      if(data === true){
        setOpen(false)
        sfirstname("")
        slastname("")
        ssexo("")
        sdatadenascimento("")
        scpf("")
        snamemother("")
        scelular("")
        stelefoneresidencial("")
        scep("")
        slogradouro("")
        snumero("")
        scomplemento("")
        sbairro("")
        slocalidade("")
        suf("")
        sdatastartsintomas("")
        slocaldoteste("")
        sdatadottste("")
        stipoteste("")
        sresultadodoteste("")
        salerta({
          open: true,
          vertical: 'top',
          horizontal: 'center',
          mensagem: "Paciente cadastrado com Suceso!!!",
          type: "success"
        })
      }else{
        setOpen(false)
        salerta({
          open: true,
          vertical: 'top',
          horizontal: 'center',
          mensagem: "Erro ao cadastrar o paciente!!! Favor validar dados ",
          type: "error"
        })
      }   
    }
  } 


  return (

    
      <main className={classes.layout}>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
          <CircularProgress color="inherit" />
      </Backdrop>
    
      <Alert alerta={alerta} handleClose={() => salerta({
          open: false,
          vertical: 'top',
          horizontal: 'center',
          mensagem: "",
          type: ""
        })}  />
     
      <Typography variant="h6" gutterBottom className={classes.title}>
        Cadastro de Paciente
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <TextField
            variant="outlined"
            size="small"
            required
            id="firstname"
            name="firstname"
            label="Nome"
            fullWidth
            autoComplete="given-name"
            value={firstname}
            onChange={(e)=>{sfirstname(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            variant="outlined"
            size="small"
            required
            id="lastname"
            name="lastname"
            label="Sobrenome"
            fullWidth
            autoComplete="family-name"
            value={lastname}
            onChange={(e)=>{slastname(e.target.value)}}
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
            id="sexo"
            name="sexo"
            label="Sexo"
            fullWidth
            select
            value={sexo}
            SelectProps={{
              native: true,
            }}
            onChange={(e)=>{ssexo(e.target.value)}}
          >
            <option  value="">
              Selecionar uma opção
            </option >

            <option  value="Feminino">
              Feminino
            </option >

            <option  value="Masculino">
              Masculino
            </option >

            <option  value="Não identificado">
              Não identificado
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
            type="date"
            required
            id="datadenascimento"
            name="datadenascimento"
            label="Data Nascimento"
            fullWidth
            value={datadenascimento}
            onChange={(e)=>{sdatadenascimento(e.target.value)}}
          />
        </Grid>
      

        <Grid item xs={12} sm={2}>
          <TextField
            variant="outlined"
            size="small"
            required
            id="cpf"
            name="cpf"
            label="CPF"
            fullWidth
            autoComplete="family-name"
            value={cpf}
            onChange={handleChangeCPF}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant="outlined"
            size="small"
            required
            id="namemother"
            name="namemother"
            label="Nome da mãe"
            fullWidth
            value={namemother}
            onChange={(e)=>{snamemother(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            variant="outlined"
            size="small"
            required
            id="celular"
            name="celular"
            label="Celular"
            fullWidth
            value={celular}
            onChange={handleChangeCelular}
          />
        </Grid>
        
        <Grid item xs={12} sm={3}>
          <TextField
            variant="outlined"
            size="small"
            required
            id="telefoneresidencial"
            name="telefoneresidencial"
            label="Telefone Residencial"
            fullWidth
            value={telefoneresidencial}
            onChange={handleChangeTelefoneResidencial}
          />
        </Grid>
      

        <Grid item xs={12} sm={2} >
          <TextField
            variant="outlined"
            size="small"
            required
            id="cep"
            name="cep"
            label="Cep"
            fullWidth
            value={cep}
            onChange={handleChangeCep}
          />
        </Grid>
        
        <Grid item xs={12} sm={10} >
          <TextField
            variant="outlined"
            size="small"
            required
            id="logradouro"
            name="logradouro"
            label="Logradouro"
            fullWidth
            value={logradouro}
            onChange={(e)=>{slogradouro(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={2} >
          <TextField
            variant="outlined"
            size="small"
            required
            id="numero"
            name="numero"
            label="Número"
            fullWidth
            value={numero}
            onChange={(e)=>{snumero(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            variant="outlined"
            size="small"
            required
            id="complemento"
            name="complemento"
            label="Complemento"
            fullWidth
            value={complemento}
            onChange={(e)=>{scomplemento(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            variant="outlined"
            size="small"
            required
            id="bairro"
            name="bairro"
            label="Bairro"
            fullWidth
            value={bairro}
            onChange={(e)=>{sbairro(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <TextField
            variant="outlined"
            size="small"
            required
            id="localidade"
            name="localidade"
            label="Cidade"
            fullWidth
            value={localidade}
            onChange={(e)=>{slocalidade(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={1}>
          <TextField 
            required
            variant="outlined"
            size="small"
            id="state" 
            name="uf" 
            label="UF" 
            fullWidth 
            value={uf}
            onChange={(e)=>{suf(e.target.value)}} 
          />
        </Grid>


        <Grid item xs={12} sm={3} >
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            size="small"
            type="date"
            required
            id="datastartsintomas"
            name="datastartsintomas"
            label="Início dos sintomas"
            fullWidth
            value={datastartsintomas}
            onChange={(e)=>{sdatastartsintomas(e.target.value)}}
          />
        </Grid>
        
        <Grid item xs={12} sm={3} >
          <TextField
            variant="outlined"
            size="small"
            required
            id="localdoteste"
            name="localdoteste"
            label="Local do Teste"
            fullWidth
            value={localdoteste}
            onChange={(e)=>{slocaldoteste(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={3} >
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            size="small"
            type="date"
            required
            id="datadottste"
            name="datadottste"
            label="Data do Teste"
            fullWidth
            value={datadottste}
            onChange={(e)=>{sdatadottste(e.target.value)}}
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
            id="tipoteste"
            name="tipoteste"
            label="Tipo do teste"
            fullWidth
            value={tipoteste}
            select
            SelectProps={{
              native: true,
            }}
            onChange={(e)=>{stipoteste(e.target.value)}}
          >
            <option  value="">
              Selecionar uma opção
            </option >

            <option  value="Teste rápido">
              Teste rápido
            </option >

            <option  value="PCR">
              PCR
            </option >

            <option  value="Sorológico">
              Sorológico
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
            id="resultadodoteste"
            name="resultadodoteste"
            label="Resultado"
            fullWidth
            value={resultadodoteste}
            select
            SelectProps={{
              native: true,
            }}
            onChange={(e)=>{sresultadodoteste(e.target.value)}}
          >
            <option  value="">
              Selecionar uma opção
            </option >

            <option  value="Positivo">
              Positivo
            </option >

            <option  value="Negativo">
              Negativo
            </option >

            <option  value="Inconclusivo">
              Inconclusivo
            </option >

          </TextField>
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            variant="outlined"
            size="small"
            required
            id="hsm"
            name="hsm"
            label="Mensagem a ser enviada"
            fullWidth
          />
        </Grid>
      
      
        <div className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={cadastrar}
        >
          Cadastrar
        </Button>
        </div>
      
      
      </Grid>
      
    </main>
      
 
    
  );
}