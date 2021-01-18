import React from 'react';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/FormLabel';

import { Field } from 'redux-form';



const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    variant="outlined"
    size="small"
    fullWidth
    autoComplete="given-name"
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)



export default function AddressForm({id, name, label, type, ...props}) {
  return (
    <Grid item xs={12} sm={12}>
      <InputLabel {...props} >{label}</InputLabel>
      <Field
        id={id}
        name={name}
        component={renderTextField}
        type={type}
      />
    </Grid>
  );
}