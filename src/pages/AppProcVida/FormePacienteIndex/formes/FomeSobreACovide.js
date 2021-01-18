import React from 'react';

import { formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import * as Inputs from '../../../../components/Inputs';

const useStyles = makeStyles((theme) => ({
  divBTNfloat: {
    display: "flex",
    marginTop: "3rem"
  },
}));

function FomeSobreACovide(props) {
  const classes = useStyles();
  const {
    foiinternado,
    tevesintoma,
    morasozinho,
    fezisolamento
  } = props

  const grupoSimNao = [
    {
      "id": "11",
      "optinosname": "afatadodotrabalho",
      "optionsdesc": "Sim",
      "optionstype": "radio",
      "optinosvalue": null,
      "optionsplaceholder": null,
      "id_question_alerts": 4,
      "created_at": "2020-01-03T03:00:00.000Z",
      "updated_at": "2020-01-03T03:00:00.000Z"
    },
    {
      "id": "12",
      "optinosname": "afatadodotrabalho",
      "optionsdesc": "Não",
      "optionstype": "radio",
      "optinosvalue": null,
      "optionsplaceholder": null,
      "id_question_alerts": 4,
      "created_at": "2020-01-03T03:00:00.000Z",
      "updated_at": "2020-01-03T03:00:00.000Z"
    }
  ]

  return(
  <div>
   
        <Grid
          container
          direction="column"
          spacing={0}
          className={classes.divBTNfloat}
        >

          <Inputs.Radio 
            opcs={grupoSimNao}
            name={"foiinternado"}
            label={"Você está ou esteve internado?"}
            className={classes.divBTNfloat}
          />

          {foiinternado === "Sim" && 
          <Inputs.Text 
            id="datadointernamento"
            name="datadointernamento" 
            label="Em qual período? " 
            type="date"
            className={classes.divBTNfloat}
          />}

          <Inputs.Radio 
            opcs={grupoSimNao}
            name={"tevesintoma"}
            label={"Teve algun sintoma"}
            className={classes.divBTNfloat}
          />

          {tevesintoma === "Sim" &&
          <Inputs.Text 
            id="datadoiniciodossintomas"
            name="datadoiniciodossintomas" 
            label="Qual a data de início do seu primeiro sintoma? " 
            type="date"
            className={classes.divBTNfloat}
          />}

          <Inputs.Radio 
            opcs={grupoSimNao}
            name={"morasozinho"}
            label={"Você mora sozinho?"}
            className={classes.divBTNfloat}
          />

          {morasozinho === "Não" &&
          <Inputs.Text 
            id="qtdpessoasmoracomvoce"
            name="qtdpessoasmoracomvoce" 
            label="Quantas pessoas moram com você?" 
            type="number"
            className={classes.divBTNfloat}
          />}

          <Inputs.Radio 
            opcs={grupoSimNao}
            name={"fezisolamento"}
            label={"Você fez isolamento em casa (ficou sozinho em quarto separado e demais recomendações)?"}
            className={classes.divBTNfloat}
          />

          {fezisolamento === "Sim" &&
          <Inputs.Text 
            id="datadoiniciodoisolamento"
            name="datadoiniciodoisolamento" 
            label="A partir de qual data?" 
            type="date"
            className={classes.divBTNfloat}
          />}
        </Grid>
      
  </div>
)}

const selector = formValueSelector('remoteSubmit') 

FomeSobreACovide = connect(state => {
  const foiinternado = selector(state, 'foiinternado')
  const tevesintoma = selector(state, 'tevesintoma')
  const morasozinho = selector(state, 'morasozinho')
  const fezisolamento = selector(state, 'fezisolamento')

  return {
    foiinternado,
    tevesintoma,
    morasozinho,
    fezisolamento
  }
})(FomeSobreACovide)



export default FomeSobreACovide
