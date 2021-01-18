import React, { useState, useEffect } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { submit } from 'redux-form'
import { connect } from 'react-redux'



import FormeRedux from './Forme';

import api from '../../services/api'



import { useParams } from "react-router-dom";


// FIM DAS IMPORTAÇÕE4S DE BIBLIOTECAS
const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  }
});

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



function Checkout({dispatch}) {

  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [forme, sforme] = useState(null);

  let { id, id_paciente } = useParams();

  useEffect(() => {
    async function getForme() {
      try {
        const { data } = await api.get(`/forme/${id}`);
        sforme(data)
      } catch (error) {
        console.log(error)
      }
    }
    getForme()
  },[id]);


  const handleNext = () => {
    
    setActiveStep(activeStep + 1)
  
    if((forme.secions.length*1) === (activeStep+1))
    console.log(activeStep)


  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const tt = () => {
    return <FormeRedux forme={forme.secions[activeStep]}>

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
            type={activeStep === forme.secions.length ? 'submit' : 'button'} 
          >
           {activeStep === forme.secions.length - 1? 'Salvar' : 'Próximo'}  
          </Button>
      </div>


    </FormeRedux>

  };




  return (

    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />

        { forme &&
          <main className={classes.layout}>
            <Paper className={classes.paper}>

              {activeStep === forme.secions.length ? (
                  <Typography component="h1" variant="h4" align="center">
                    Seção Final
                  </Typography>
                ) : (
                  <Typography component="h1" variant="h4" align="center">
                    {forme.secions[activeStep].sectiontitle}
                  </Typography>
                )}


                <Stepper activeStep={activeStep} className={classes.stepper}>
                  {forme.secions.map((label) => (
                    <Step key={label.sectiontitle}>
                      <StepLabel></StepLabel>
                    </Step>
                  ))}
                </Stepper>


                <React.Fragment>
                  {activeStep === forme.secions.length ? (
                    <React.Fragment>
                      <Typography variant="h5" gutterBottom>
                        Obrigado pela colaboração!!!
                      </Typography>
                      <Typography variant="subtitle1">
                        Continue se protegendo sempre e use mascara. 
                      </Typography>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {tt()}
                    </React.Fragment>
                  )}
                </React.Fragment>
            </Paper>
          </main>
        }
      </React.Fragment>
    </ThemeProvider>

  );
}


export default connect()(Checkout)