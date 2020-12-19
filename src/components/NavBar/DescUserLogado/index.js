import React from 'react';

import { Container } from './styles';
import {MdAdd} from 'react-icons/md';

function DescUserLogado({nomeUserLogad, cargoUserLogado, fotoUserLogado, ...rest}) {
  return (
    <Container>

      <img src={fotoUserLogado || ""} alt="" /> 
      <div>
        <strong>
          {nomeUserLogad || ""}
        </strong>
        <p>
          {cargoUserLogado || ""}
        </p>
      </div>
      
      <button {...rest}>
        <MdAdd size={20} color="#fff"/>
      </button>
      
    
    </Container>
  )
}

export default DescUserLogado;