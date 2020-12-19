import React from 'react';

import { Container } from './styles';

function NavBar({children, fundoNavBar}) {
  return (
    <Container
    fundoNavBar={fundoNavBar}
    >
      {children}
    </Container>
  )
}

export default NavBar;