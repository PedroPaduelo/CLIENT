import React, {useState} from 'react';
import { useParams } from "react-router-dom";

import { mask , unMask } from 'remask'

import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import TableComunicante from '../components/TableComunicante';

import api from '../../../services/api';

const useStyles = makeStyles((theme) => ({
  divBTNfloat: {
    display: "flex",
    justifyContent: "center"
  },
}));

const localdocontatocompessoasexternas = [
  {
    "id": "31",
    "optinosname": "localdocontatocompessoasexternas",
    "optionsdesc": "Trabalho",
    "optionstype": "radio",
    "optinosvalue": null,
    "optionsplaceholder": null,
    "id_question_alerts": 19,
    "created_at": "2020-01-03T03:00:00.000Z",
    "updated_at": "2020-01-03T03:00:00.000Z"
  },
  {
    "id": "32",
    "optinosname": "localdocontatocompessoasexternas",
    "optionsdesc": "Em casa",
    "optionstype": "radio",
    "optinosvalue": null,
    "optionsplaceholder": null,
    "id_question_alerts": 19,
    "created_at": "2020-01-03T03:00:00.000Z",
    "updated_at": "2020-01-03T03:00:00.000Z"
  },
  {
    "id": "33",
    "optinosname": "localdocontatocompessoasexternas",
    "optionsdesc": "Igreja",
    "optionstype": "radio",
    "optinosvalue": null,
    "optionsplaceholder": null,
    "id_question_alerts": 19,
    "created_at": "2020-01-03T03:00:00.000Z",
    "updated_at": "2020-01-03T03:00:00.000Z"
  },
  {
    "id": "34",
    "optinosname": "localdocontatocompessoasexternas",
    "optionsdesc": "Outro ",
    "optionstype": "radio",
    "optinosvalue": null,
    "optionsplaceholder": null,
    "id_question_alerts": 19,
    "created_at": "2020-01-03T03:00:00.000Z",
    "updated_at": "2020-01-03T03:00:00.000Z"
  }
]



function FomeCadastroComunicantesExternos() {
  let { id_paciente } = useParams();
  const [celular, scelular] = useState('');
  const [nome, snome] = useState('');
  const [rows, srows] = useState([]);



  function handleChangeCelular(e) {
    const valorOriginal = unMask(e.target.value)
    const valorComMscara = mask(valorOriginal, ["(99) 9999-9999", "(99) 9 9999-9999"])
    scelular(valorComMscara);
  }

  async function cadComunicante(){
    if(nome === "" || 
    celular === ""){
        
    }else{
      const {data} = await api.post(`/CreateComunicante`,{
        nome ,
        celular ,
        id_paciente
      });

      console.log(data);
      srows(data)

      snome("")
      scelular("")
      
    }
  } 



  




  return(
  <div>
        <Grid
          container
          direction="column"
          spacing={0}
        >
          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              size="small"
              required
              id="datadocontatocompessoasexternas"
              name="datadocontatocompessoasexternas"
              label="Data do contato"
              fullWidth
              autoComplete="given-name"
              value={nome}
              onChange={(e)=>{snome(e.target.value)}}
            />
          </Grid>

    
          {/* <Inputs.Radio 
            opcs={localdocontatocompessoasexternas}
            name="localdocontatocompessoasexternas"
            label="Local do contato"
          /> */}

          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              size="small"
              required
              id="nomedocominucanteexternos"
              name="nomedocominucanteexternos"
              label="Nome"
              fullWidth
              autoComplete="given-name"
              value={nome}
              onChange={(e)=>{snome(e.target.value)}}
            />
          </Grid>
          
          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              size="small"
              required
              id="telefonadocomunicanteinterno"
              name="telefonadocomunicanteinterno"
              label="Telefone"
              fullWidth
              value={celular}
              onChange={handleChangeCelular}
            />
          </Grid>

          <div className={"classes.divBTNfloat"}>
            <Fab size="small" color="primary" aria-label="add" onClick={cadComunicante}>
              <AddIcon />
            </Fab>
          </div>
    
          <TableComunicante rows={rows} />

        </Grid>
  </div>
)}

export default FomeCadastroComunicantesExternos
