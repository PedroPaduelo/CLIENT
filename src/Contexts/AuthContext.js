import React, { useState, useEffect, createContext } from 'react';
import api from '../services/api';


const AuthContext = createContext();


const link = [
  {
    "name": "Criar Produto",
    "nomeorganizacao": "Serviços",
    "path": "/Painel/CriarProdsVsPages",
    "componente": "PainelCampanhas",
    "icone": "fas fa-clipboard-list"
  }
]

function AuthProvider({ children }) {

  const [ authenticated, setAuthenticated ] = useState(false);
  const [ loading, setLoading ] = useState(true);
  const [ user, setUser ] = useState();
  const [ links, slinks ] = useState(link);

  useEffect(() => {
    const token = localStorage.getItem('token');
    api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    async function getUser() {
      try {
        const { data } = await api.get(`/GetUserToken`,{token});
        setUser(data.user)
        setAuthenticated(true);
        setLoading(false)
      } catch (error) {
        console.log(error)
        setAuthenticated(false);
        setLoading(false)
      }
    }
    if (token) {
      getUser();
    }else{
      setAuthenticated(false);
      setLoading(false)
    }
    slinks(link)
  }, []);


  async function handleSignup(token,user) {
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setUser(user.user)
    setAuthenticated(true);
    setLoading(false)
    return true
  }

  async function handleLogin(token, user) {
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setUser(user.user)
    setAuthenticated(true);
    setLoading(false)
    return true
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
  }

  return (
    <AuthContext.Provider value={{ 
      user,
      links,
      authenticated,
      loading,

      handleSignup,
      handleLogin,
      handleLogout
    }}>
      {children}
    </AuthContext.Provider>
  );

}

export { AuthContext, AuthProvider };