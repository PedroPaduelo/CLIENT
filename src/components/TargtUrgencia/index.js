import React from 'react';

import { Container } from './styles';

function TargtUrgencia({textTarget, cor}) {
  return (
    <Container cor={cor}>
        <p>{ textTarget || "MAXIMA" }</p> 
    </Container>
  );
}

export default TargtUrgencia;