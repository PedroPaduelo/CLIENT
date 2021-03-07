import React, { useContext } from 'react';

import { useHistory } from "react-router-dom";

import GoogleLogin from 'react-google-login';
import { AuthContext } from '../../Contexts/AuthContext';

import api from '../../services/api'

export default function SignInSide() {


  const history = useHistory();
  const { handleLogin } = useContext(AuthContext);

  async function Logar(response){

    const tokenId = response.tokenId
    const {data} = await api.post(`/LoginUser`, {tokenId})

    const setContextUser =  await handleLogin(tokenId,data)

    if(setContextUser){
      history.push('/Painel')
    }
  } 


  const responseGoogle = (response) => {
  }
  
  return (
  
    <div>
      <GoogleLogin
        clientId="500065680033-90nknfddkptn9mo9a6n3emn9q9cotcgh.apps.googleusercontent.com"
        buttonText="Logar com Gmail"
        onSuccess={Logar}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
    
  );
}

