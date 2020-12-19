import React from 'react';

import { Container } from './styles';

function CardForms({children, directionChildren, justifyContent, marginTop, marginBottom}) {
  return (
    <Container 
      directionChildren={directionChildren}
      justifyContent={justifyContent}
      marginTop={marginTop}
      marginBottom={marginBottom}>
        {children}
    </Container>
  );
}

export default CardForms;