import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    handleSignup , authenticated, loading, handleLogin, handleLogout, user, handleRotas, apps,
  } = useAuth();

  return (
    <Context.Provider value={{ handleSignup, authenticated, loading, handleLogin, handleLogout, user, apps, handleRotas }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };