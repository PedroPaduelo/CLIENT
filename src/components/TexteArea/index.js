import React from 'react';

import { Container } from './styles';

function TexteArea({label,sizeLabel,htmlFor, ...rest}) {
  return (
    <Container sizeLabel={sizeLabel}>
         <label htmlFor={htmlFor}>{label}</label>
        <textarea {...rest}/>


    </Container>
  )};

export default TexteArea;