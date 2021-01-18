import React from 'react';
import { Field } from 'redux-form';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';


const radioButton = ({ input, opcs, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
        {opcs.map( (opc) => {
            return (
                <FormControlLabel key={opc.id} value={opc.optionsdesc} control={<Radio  color="primary" />} label={opc.optionsdesc} />
            )
        })}
    </RadioGroup>
  </FormControl>
)



export default function RadioButtonsGroup({opcs, name, label, ...props}) {
  return (
    <>
      <InputLabel {...props}>{label}</InputLabel>
      <Field 
        name={name} 
        component={radioButton} 
        opcs={opcs} 
      />
    </>
  );
}

