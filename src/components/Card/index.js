import React from 'react';

import { Container } from './styles';

function Card({children, directionChildren, width, height, corButton}) {
  return (
    <Container corButton={corButton}
      directionChildren={directionChildren}
      width={width}
      height={height}
    >
        {children}
    </Container>
  );
}

export default Card;