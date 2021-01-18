import React, {useState, useEffect} from 'react';

import { useParams } from "react-router-dom";

import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import FomeCadastroComunicantesExternos from './FomeCadastroComunicantesExternos'
import FomeCadastroComunicantesInternos from './FomeCadastroComunicantesInternos'
import FomeContatosExternos from './FomeContatosExternos'
import FomeDadosIniciais from './FomeDadosIniciais'
import FomeSobreACovide from './FomeSobreACovide'



import api from '../../../../services/api';

import { load as loadAccount } from './account';


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
  let { id_paciente } = useParams();

  const {
    handleSubmit, load
  } = props


  useEffect(() => {

    async function getComunicantes(){
      const {data} = await api.get(`/ListInitialValues/1/${id_paciente}`);
      let auxi2 = {}

      data.map(dado => {
        let auxi = Object.entries(dado)
        
        Object.defineProperty(auxi2, auxi[0][1],{
          value: auxi[1][1],
          writable: true
        })
            return auxi2
      })
      load(auxi2)
    } 
      getComunicantes()
  }, [id_paciente]);



  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        {getStepContent(step)}
        {props.children}

      </form>
    </React.Fragment>
  );
}





Forme = reduxForm({
    form: 'remoteSubmit'
  })(Forme);


  Forme = connect(
    (state) => ({
      initialValues: state.account.data // pull initial values from account reducer
    }),
    { load: loadAccount } // bind account loading action creator
  )(Forme);


  export default Forme;

