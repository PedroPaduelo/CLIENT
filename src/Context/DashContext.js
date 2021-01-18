import React, { createContext } from 'react';

import dashControleLayout from './hooks/dashControleLayout';

const DashContext = createContext();

function DashProvider({ children }) {
  const {
    handleNaveBarClose, handleNaveBarOpen, open, handleRouts, rotas, loadingRotas
    
  } = dashControleLayout();

  return (
    <DashContext.Provider value={{ handleNaveBarClose, handleNaveBarOpen, open, handleRouts, rotas, loadingRotas }}>
      {children}
    </DashContext.Provider>
  );
}

export { DashContext, DashProvider };