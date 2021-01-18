import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { Field } from 'redux-form';



const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
)


export default function Checkboxes() {
  

  return (
    <div>
      <Field name="employed" component={renderCheckbox} label="Employed" />
    </div>
  );
}