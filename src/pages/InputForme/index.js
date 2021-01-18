import React, { useState, useContext } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { submit } from 'redux-form'
import { connect } from 'react-redux'

import Titulo from './components/Titulo';
import StepsNumericos from './components/StepsNumericos';
import PageFinalForme from './components/PageFinalForme';

import Formes from './formes/index';

import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const stepsFome = [
  {
    "id": "1",
    "sectiontitle": "Dados Iniciais",
    "sectiondesc": "Dados Iniciais",
    "conponente": "FomeDadosIniciais"
  },
  {
    "id": "2",
    "sectiontitle": "Sobre a Covid-19",
    "sectiondesc": "Sobre a Covid-19",
    "conponente": "FomeSobreACovide"
  },
  {
    "id": "3",
    "sectiontitle": "Cadastro comunicantes internos",
    "sectiondesc": "Cadastro comunicantes internos",
    "conponente": "FomeCadastroComunicantesInternos"
  },
  {
    "id": "4",
    "sectiontitle": "Contatos externos",
    "sectiondesc": "Contatos externos",
    "conponente": "FomeContatosExternos"
  },
  {
    "id": "5",
    "sectiontitle": "Cadastro contatos externos",
    "sectiondesc": "Cadastro contatos externos",
    "conponente": "FomeCadastroComunicantesExternos"
  }
]

function Checkout({dispatch}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  let { id_paciente } = useParams();

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const mySubmitFunction = (values) => {
    
    let resposta = {
      id_paciente: id_paciente,
      res:Object.entries(values)
    }

    console.log(resposta)
  }

  return (
      <React.Fragment>
        <CssBaseline />

          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Titulo 
                activeStep={activeStep}
                sizeFull={stepsFome.length}
                title={  activeStep === stepsFome.length ? "" : stepsFome[activeStep].sectiontitle }
                titleDefalut={"Seção Final"}
              />
              <StepsNumericos 
                activeStep={activeStep}
                secions={stepsFome}
              />

              {activeStep === stepsFome.length ? (
                <PageFinalForme/>
              ) : (
                <Formes step={activeStep}  onSubmit={mySubmitFunction} />
              )}



              {activeStep !== stepsFome.length &&
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Anterior
                  </Button>
                )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    type={'button'} 
                  >
                  {'Próximo'}  
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch(submit('remoteSubmit'))}
                    className={classes.button}
                    type={'button'} 
                  >
                  {'Enviar'}  
                  </Button>
              </div>
              }
            </Paper>
          </main>
      </React.Fragment>
  );
}
export default connect()(Checkout)