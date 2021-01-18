import React from 'react';

import Grid from '@material-ui/core/Grid';

import * as Inputs from '../../../../components/Inputs';

function FomeContatosExternos() {

  return(
  <div>
        <Grid
          container
          direction="column"
          spacing={0}
        >
          <Inputs.Text 
            id="qtdlugaresvocepassou"
            name="qtdlugaresvocepassou" 
            label="Em quantos lugares você estima que passou neste período? " 
            type="number"
          />

          <Inputs.Text 
            id="qtdpessoaspassaramporvoce"
            name="qtdpessoaspassaramporvoce" 
            label="Com quantas pessoas você estima que teve contato em todo este período?" 
            type="number"
          />

        </Grid>
  </div>
)}

export default FomeContatosExternos
