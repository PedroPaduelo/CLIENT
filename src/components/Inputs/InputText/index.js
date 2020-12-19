import React from 'react';

import { Container } from './styles';

function InputText(

  { 
    sizeLabel,
    sizeInput,
    directionInputLabel,
    sizeInputLargura,
    
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
      directionInputLabel={directionInputLabel}
      sizeInputLargura={sizeInputLargura}
    >
        {label && <label htmlFor={htmlFor}>{label}</label> }
        <input id={name} name={name} disabled={disabled} {...rest}/>
    </Container>
)}

export default InputText;