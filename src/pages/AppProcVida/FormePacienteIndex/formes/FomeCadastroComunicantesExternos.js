import React, {useState, useEffect} from 'react';

import { useParams } from "react-router-dom";

import { mask , unMask } from 'remask'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/core/styles';

import TableComunicante from '../components/TableComunicante';
import Alert  from '../../../../components/Alert';

import api from '../../../../services/api';



const useStyles = makeStyles((theme) => ({
  divBTNfloat: {
    display: "flex",
    justifyContent: "center"
  },
}));


function FomeCadastroComunicantesExternos() {
  const classes = useStyles();

  let { id_paciente } = useParams();
  const [rows, srows] = useState([]);

  const [celular, scelular] = useState('');
  const [nome, snome] = useState('');
  const [datadocontatocompessoasexternas, sdatadocontatocompessoasexternas] = useState('');
  const [localdocontatocompessoasexternas, slocaldocontatocompessoasexternas] = useState('');
  const [alerta, salerta] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    mensagem: "",
    type: ""
  });
  
  useEffect(() => {

    async function getComunicantes(){
      const {data} = await api.get(`/CreateComunicante/${id_paciente}/Externo`);
      srows(data)
    } 
      getComunicantes()
  }, []);

  function handleChangeCelular(e) {
    const valorOriginal = unMask(e.target.value)
    const valorComMscara = mask(valorOriginal, ["(99) 9999-9999", "(99) 9 9999-9999"])
    scelular(valorComMscara);
  }

  async function cadComunicante(){
    if(nome === "" || 
    celular === "" ||
    datadocontatocompessoasexternas === "" ||
    localdocontatocompessoasexternas === ""){
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
        datadocontatocompessoasexternas,
        localdocontatocompessoasexternas,
        communicatingtipo: "Externo"
      });

      srows(data)

      snome("")
      scelular("")
      sdatadocontatocompessoasexternas("")
      slocaldocontatocompessoasexternas("")
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
          })}/>


          <Grid item xs={12} sm={12}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              type="date"
              id="datadocontatocompessoasexternas"
              name="datadocontatocompessoasexternas"
              label="Data do contato"
              fullWidth
              value={datadocontatocompessoasexternas}
              onChange={(e)=>{sdatadocontatocompessoasexternas(e.target.value)}}
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup aria-label="gender" name="localdocontatocompessoasexternas" value={localdocontatocompessoasexternas} onChange={(e)=>{slocaldocontatocompessoasexternas(e.target.value)}}>
              
              <FormControlLabel value="Trabalho" control={<Radio />} label="Trabalho" />
              <FormControlLabel value="Em casa" control={<Radio />} label="Em casa" />
              <FormControlLabel value="Igreja" control={<Radio />} label="Igreja" />
              <FormControlLabel value="Outro" control={<Radio />} label="Outro" />
        
            </RadioGroup>
          </Grid>
    
  

          <Grid item xs={12} sm={12}>
            <TextField
              variant="outlined"
              size="small"
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

export default FomeCadastroComunicantesExternos
