import React, { createContext } from 'react';

import useForm from './hooks/useForm';

const FormeContex = createContext();

function FormeProvider({ children }) {
  const {
     credenciaisPaciente , validado, validarCredenciais
    
  } = useForm();

  return (
    <FormeContex.Provider value={{ credenciaisPaciente,validado, validarCredenciais }}>
      {children}
    </FormeContex.Provider>
  );
}

export { FormeContex, FormeProvider };