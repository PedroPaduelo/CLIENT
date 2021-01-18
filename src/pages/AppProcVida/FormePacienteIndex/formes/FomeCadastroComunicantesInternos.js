import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import { mask , unMask } from 'remask'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import TableComunicante from '../components/TableComunicante';
import Alert  from '../../../../components/Alert';

import api from '../../../../services/api';




const useStyles = makeStyles((theme) => ({
  divBTNfloat: {
    display: "flex",
    justifyContent: "center"
  },
}));


function FomeCadastroComunicantesInternos() {
  const classes = useStyles();
  const [celular, scelular] = useState('');
  const [nome, snome] = useState('');
  const [rows, srows] = useState([]);
  const [alerta, salerta] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    mensagem: "",
    type: ""
  });

  let { id_paciente } = useParams();

  function handleChangeCelular(e) {
    const valorOriginal = unMask(e.target.value)
    const valorComMscara = mask(valorOriginal, ["(99) 9999-9999", "(99) 9 9999-9999"])
    scelular(valorComMscara);
  }

  useEffect(() => {

    async function getComunicantes(){
      const {data} = await api.get(`/CreateComunicante/${id_paciente}/Interno`);
      srows(data)
    } 
      getComunicantes()
  }, []);

  async function cadComunicante(){
    if(nome === "" || 
    celular === ""){
      salerta({
        open: true,
        vertical: 'top',
        horizontal: 'center',
        mensagem: "Favor Preencer todos os campos!!!",
        type: "info"
      })
        
    }else{
      const {data} = await api.post(`/CreateComunicante`,{
        nome ,
        celular ,
        id_paciente: id_paciente,
        communicatingtipo: "Interno"
      });
      srows(data)
      snome("")
      scelular("")
      salerta({
        open: true,
        vertical: 'top',
        horizontal: 'center',
        mensagem: "Comunicante cadastrado com Suceso!!!",
        type: "success"
      })
    }
  } 

  
  return(
  <div>
        <Grid
          container
          direction="column"
          spacing={2}
        >
          <Alert alerta={alerta} handleClose={() => salerta({
            open: false,
            vertical: 'top',
            horizontal: 'center',
            mensagem: "",
            type: ""
          })}  />
          
          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              size="small"
              required
              id="nomedocominucanteinterno"
              name="nomedocominucanteinterno"
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

          <div className={classes.divBTNfloat}>
            <Fab size="small" color="primary" aria-label="add" onClick={cadComunicante}>
              <AddIcon />
            </Fab>
          </div>
    
          <TableComunicante rows={rows} />
         
        </Grid>        
  </div>
)}



export default FomeCadastroComunicantesInternos
