import React from 'react';

import { Container } from './styles';

function BulateInfoCard({userLogado, frasiologia}) {
  return (
    <Container>
        <strong>{ userLogado || "" }</strong>
        <p> 
            { frasiologia || "" }
        </p>
    </Container>
  );
}

export default BulateInfoCard;