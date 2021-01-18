import React from 'react';
import { makeStyles} from '@material-ui/core/styles';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


const useStyles = makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
  }
}));



function StepsNumericos({activeStep, secions}) {
  const classes = useStyles();
  return (
      <React.Fragment>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {secions.map((secion) => (
            <Step key={secion.id}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
      </React.Fragment>
  );
}


export default StepsNumericos