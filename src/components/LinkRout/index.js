import React from 'react';

import { Container } from './styles';

import {  Link, useRouteMatch } from "react-router-dom";

function LinkRout({label, to, activeOnlyWhenExact}) {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <Container match={match}  >

      {match ? 
         
         <Link to={to}>
             {label}
         </Link>
        
         : 
         
         <Link to={to} >
             {label}
         </Link>
        
     }
    </Container>
  );
}

export default LinkRout;