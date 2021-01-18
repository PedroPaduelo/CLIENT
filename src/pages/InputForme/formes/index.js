import React from 'react';
import { reduxForm } from 'redux-form'
import { submit } from '../showResults'

import FomeCadastroComunicantesExternos from './FomeCadastroComunicantesExternos'
import FomeCadastroComunicantesInternos from './FomeCadastroComunicantesInternos'
import FomeContatosExternos from './FomeContatosExternos'
import FomeDadosIniciais from './FomeDadosIniciais'
import FomeSobreACovide from './FomeSobreACovide'


function getStepContent(step) {
  switch (step) {
    case 0:
      return <FomeDadosIniciais />;
    case 1:
      return <FomeSobreACovide />;
    case 2:
      return <FomeCadastroComunicantesInternos />;
    case 3:
      return <FomeContatosExternos />;
    case 4:
      return <FomeCadastroComunicantesExternos />;
    default:
      throw new Error('Unknown step');
  }
}

function Forme({step, ...props}) {
  const { error, handleSubmit } = props


  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        {getStepContent(step)}
      </form>
    </React.Fragment>
  );
}





export default reduxForm({
    form: 'remoteSubmit',
    onSubmit: submit
  })(Forme);




