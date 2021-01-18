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


function FomeDadosIniciais(props) {
  const classes = useStyles();
  const {
    afatadodotrabalho,
   
  } = props


  const ocupacao = [
    {
      "id": "1",
      "optinosname": "ocupacao",
      "optionsdesc": "Trabalho remunerado",
      "optionstype": "radio",
      "optinosvalue": null,
      "optionsplaceholder": null,
      "id_question_alerts": 1,
      "created_at": "2020-01-03T03:00:00.000Z",
      "updated_at": "2020-01-03T03:00:00.000Z"
    },
    {
      "id": "2",
      "optinosname": "ocupacao",
      "optionsdesc": "Recebo aposentadoria ou auxílio INSS",
      "optionstype": "radio",
      "optinosvalue": null,
      "optionsplaceholder": null,
      "id_question_alerts": 1,
      "created_at": "2020-01-03T03:00:00.000Z",
      "updated_at": "2020-01-03T03:00:00.000Z"
    },
    {
      "id": "3",
      "optinosname": "ocupacao",
      "optionsdesc": "Estou desempregado (a)",
      "optionstype": "radio",
      "optinosvalue": null,
      "optionsplaceholder": null,
      "id_question_alerts": 1,
      "created_at": "2020-01-03T03:00:00.000Z",
      "updated_at": "2020-01-03T03:00:00.000Z"
    },
    {
      "id": "4",
      "optinosname": "ocupacao",
      "optionsdesc": "Não exerço trabalho remunerado",
      "optionstype": "radio",
      "optinosvalue": null,
      "optionsplaceholder": null,
      "id_question_alerts": 1,
      "created_at": "2020-01-03T03:00:00.000Z",
      "updated_at": "2020-01-03T03:00:00.000Z"
    },
    {
      "id": "5",
      "optinosname": "ocupacao",
      "optionsdesc": "Faço trabalho voluntario",
      "optionstype": "radio",
      "optinosvalue": null,
      "optionsplaceholder": null,
      "id_question_alerts": 1,
      "created_at": "2020-01-03T03:00:00.000Z",
      "updated_at": "2020-01-03T03:00:00.000Z"
    }
  ]
  const areaatuacao = [
    {
      "id": "6",
      "optinosname": "areaatuacao",
      "optionsdesc": "Construção ",
      "optionstype": "radio",
      "optinosvalue": null,
      "optionsplaceholder": null,
      "id_question_alerts": 2,
      "created_at": "2020-01-03T03:00:00.000Z",
      "updated_at": "2020-01-03T03:00:00.000Z"
    },
    {
      "id": "7",
      "optinosname": "areaatuacao",
      "optionsdesc": "Varejo ",
      "optionstype": "radio",
      "optinosvalue": null,
      "optionsplaceholder": null,
      "id_question_alerts": 2,
      "created_at": "2020-01-03T03:00:00.000Z",
      "updated_at": "2020-01-03T03:00:00.000Z"
    },
    {
      "id": "8",
      "optinosname": "areaatuacao",
      "optionsdesc": "Industria ",
      "optionstype": "radio",
      "optinosvalue": null,
      "optionsplaceholder": null,
      "id_question_alerts": 2,
      "created_at": "2020-01-03T03:00:00.000Z",
      "updated_at": "2020-01-03T03:00:00.000Z"
    },
    {
      "id": "9",
      "optinosname": "areaatuacao",
      "optionsdesc": "ADM",
      "optionstype": "radio",
      "optinosvalue": null,
      "optionsplaceholder": null,
      "id_question_alerts": 2,
      "created_at": "2020-01-03T03:00:00.000Z",
      "updated_at": "2020-01-03T03:00:00.000Z"
    }
  ]
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
        >

          <Inputs.Radio 
            opcs={ocupacao}
            name={"ocupacao"}
            label={"Sobre sua ocupação"}
            className={classes.divBTNfloat}
          />

          <Inputs.Radio 
            opcs={areaatuacao}
            name={"areaatuacao"}
            label={"Selecione sua área de atuação profissiona"}
            className={classes.divBTNfloat}
          />

          <Inputs.Text 
            id="nomeempresa"
            name="nomeempresa" 
            label="Escreva o nome da sua empresa" 
            type="text"
            className={classes.divBTNfloat}
          />

          <Inputs.Radio 
            opcs={grupoSimNao}
            name={"afatadodotrabalho"}
            label={"Foi afastado do trabalho?"}
            className={classes.divBTNfloat}
          />

          {afatadodotrabalho === "Sim" &&
            <Inputs.Text 
              id="datadoafastamentodotrabalho"
              name="datadoafastamentodotrabalho" 
              label="Quando você foi afastado do trabalho?" 
              type="date"
              className={classes.divBTNfloat}
            />
          }

        </Grid>
  </div>
)}

const selector = formValueSelector('remoteSubmit') 

FomeDadosIniciais = connect(
  state => {
  const afatadodotrabalho = selector(state, 'afatadodotrabalho')
  return {
    afatadodotrabalho
  }
})(FomeDadosIniciais)


export default FomeDadosIniciais
