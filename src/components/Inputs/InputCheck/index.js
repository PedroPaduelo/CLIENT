import React from 'react';

import { Container } from './styles';

function InputCheckBox(
  { 
    sizeLabel,
    sizeInput,
    marginTop,
    
    label,
    htmlFor, 
    name, 
    disabled, 
    ...rest
  }
) {
  return (
    <Container 
      sizeLabel={sizeLabel}
      sizeInput={sizeInput}
      marginTop={marginTop}
    >
        <input id={name} name={name} disabled={disabled} {...rest}/>
        <label htmlFor={htmlFor}>{label}</label>
    </Container>
)}

export default InputCheckBox;