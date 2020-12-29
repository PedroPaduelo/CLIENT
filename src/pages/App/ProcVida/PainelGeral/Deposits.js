import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import { makeStyles } from '@material-ui/core/styles';


import api from '../../../../services/api';




const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  buttons: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));


export default function AddressForm() {
  const classes = useStyles();
  const [firstName, sfirstName] = useState('');
  const [lastName, slastName] = useState('');
  const [sexo, ssexo] = useState('');
  const [data_de_nascimento, sdata_de_nascimento] = useState('');
  const [cpf, scpf] = useState('');
  const [nomeMae, snomeMae] = useState('');
  const [celular, scelular] = useState('');
  const [telefoneResidencial, stelefoneResidencial] = useState('');
  const [cep, scep] = useState('');
  const [endereco, sendereco] = useState('');
  const [numero, snumero] = useState('');
  const [cidade, scidade] = useState('');
  const [uf, suf] = useState('');
  const [startsintomas, sstartsintomas] = useState('');
  const [localDoTeste, slocalDoTeste] = useState('');
  const [dtteste, sdtteste] = useState('');
  const [tipoTeste, stipoTeste] = useState('');
  const [resultadoDoTeste, sresultadoDoTeste] = useState('');
  const [hsm, shsm] = useState('');

  const [alert, salert] = useState('');

  async function cadastrar(){
    const created_at = "2020-12-20 14:09:27"
    const updated_at = "2020-12-20 14:09:27"
    
    if(
      firstName === "" || 
      lastName === "" || 
      sexo === "" || 
      data_de_nascimento === "" || 
      cpf === "" || 
      nomeMae === "" || 
      celular === "" || 
      telefoneResidencial === "" || 
      cep === "" || 
      endereco === "" || 
      numero === "" || 
      cidade === "" || 
      uf ==="" || 
      startsintomas === "" || 
      localDoTeste === "" || 
      dtteste === "" || 
      tipoTeste === "" || 
      resultadoDoTeste === "" ||
      hsm === ""){
        salert("vasio")
        alert("Preencha todos os campos!!!");
    }else{


    
          await api.post(`/disparosWahts`,{
            firstName ,
            lastName ,
            sexo ,
            data_de_nascimento ,
            cpf ,
            nomeMae ,
            celular ,
            telefoneResidencial ,
            cep ,
            endereco ,
            numero ,
            cidade ,
            uf ,
            startsintomas ,
            localDoTeste ,
            dtteste ,
            tipoTeste ,
            resultadoDoTeste ,
            created_at,
            updated_at,
            hsm
          });
          
            sfirstName("")
            slastName("")
            ssexo("")
            sdata_de_nascimento("")
            scpf("")
            snomeMae("")
            scelular("")
            stelefoneResidencial("")
            scep("")
            sendereco("")
            snumero("")
            scidade("")
            suf("")
            sstartsintomas("")
            slocalDoTeste("")
            sdtteste("")
            stipoTeste("")
            sresultadoDoTeste("")
            shsm("")
    }
  } 

  return (
    <main className={classes.layout}>
      <Typography variant="h6" gutterBottom>
        Cadastro de Paciente
      </Typography>
      <Grid container spacing={3}>

     
   
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nome"
            fullWidth
            autoComplete="given-name"
            value={firstName}
            onChange={(e)=>{sfirstName(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Sobrenome"
            fullWidth
            autoComplete="family-name"
            value={lastName}
            onChange={(e)=>{slastName(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="sexo"
            name="sexo"
            label="Sexo"
            fullWidth
            value={sexo}
            onChange={(e)=>{ssexo(e.target.value)}}
          />
        </Grid>
        
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="data_de_nascimento"
            name="data_de_nascimento"
            label="Data Nascimento"
            fullWidth
            value={data_de_nascimento}
            onChange={(e)=>{sdata_de_nascimento(e.target.value)}}
          />
        </Grid>
      

        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="cpf"
            name="cpf"
            label="CPF"
            fullWidth
            autoComplete="family-name"
            value={cpf}
            onChange={(e)=>{scpf(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={5}>
          <TextField
            required
            id="nomeMae"
            name="nomeMae"
            label="Nome da mãe"
            fullWidth
            value={nomeMae}
            onChange={(e)=>{snomeMae(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="celular"
            name="celular"
            label="Celular"
            fullWidth
            value={celular}
            onChange={(e)=>{scelular(e.target.value)}}
          />
        </Grid>
        
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="telefoneResidencial"
            name="telefoneResidencial"
            label="Telefone Residencial"
            fullWidth
            value={telefoneResidencial}
            onChange={(e)=>{stelefoneResidencial(e.target.value)}}
          />
        </Grid>
      

        <Grid item xs={12} sm={2} >
          <TextField
            required
            id="cep"
            name="cep"
            label="Cep"
            fullWidth
            value={cep}
            onChange={(e)=>{scep(e.target.value)}}
          />
        </Grid>
        
        <Grid item xs={12} sm={4} >
          <TextField
            required
            id="endereco"
            name="endereco"
            label="Endereco"
            fullWidth
            value={endereco}
            onChange={(e)=>{sendereco(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={2} >
          <TextField
            required
            id="numero"
            name="numero"
            label="Numero"
            fullWidth
            value={numero}
            onChange={(e)=>{snumero(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="cidade"
            name="cidade"
            label="Cidade"
            fullWidth
            value={cidade}
            onChange={(e)=>{scidade(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={1}>
          <TextField 
            id="state" 
            name="uf" 
            label="UF" 
            fullWidth 
            value={uf}
            onChange={(e)=>{suf(e.target.value)}} 
          />
        </Grid>


        <Grid item xs={12} sm={2} >
          <TextField
            required
            id="startsintomas"
            name="startsintomas"
            label="Início dos sintomas"
            fullWidth
            value={startsintomas}
            onChange={(e)=>{sstartsintomas(e.target.value)}}
          />
        </Grid>
        
        <Grid item xs={12} sm={4} >
          <TextField
            required
            id="localDoTeste"
            name="localDoTeste"
            label="Local do Teste"
            fullWidth
            value={localDoTeste}
            onChange={(e)=>{slocalDoTeste(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={2} >
          <TextField
            required
            id="dtteste"
            name="dtteste"
            label="Data do Teste"
            fullWidth
            value={dtteste}
            onChange={(e)=>{sdtteste(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="tipoTeste"
            name="tipoTeste"
            label="Tipo do teste"
            fullWidth
            value={tipoTeste}
            onChange={(e)=>{stipoTeste(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <TextField
            required
            id="resultadoDoTeste"
            name="resultadoDoTeste"
            label="Resultado"
            fullWidth
            value={resultadoDoTeste}
            onChange={(e)=>{sresultadoDoTeste(e.target.value)}}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="hsm"
            name="hsm"
            label="Mensagem a ser enviada"
            fullWidth
            value={hsm}
            onChange={(e)=>{shsm(e.target.value)}}
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