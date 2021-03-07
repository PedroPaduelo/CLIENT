import React, { useContext } from 'react';

import { useHistory } from "react-router-dom";

import GoogleLogin from 'react-google-login';

import {makeStyles} from '@material-ui/core/styles';

import { AuthContext } from '../../Contexts/AuthContext';

import api from '../../services/api';


const useStyles = makeStyles((theme) => ({
  submit: {
    margin: "5rem 0 3rem" ,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));


export default function SignInSide() {
  const history = useHistory();
  const classes = useStyles();

  const { handleSignup, handleListFilasUser} = useContext(AuthContext);
  
  
  const responseGoogle = (response) => {
  }



  async function Logar(response){
    const tokenId = response.tokenId
    const {data} = await api.post(`/CreateUser`, {tokenId})

    const setContextUser =  await handleSignup(tokenId,data)
                            await handleListFilasUser(data.user.email)

    if(setContextUser){
      history.push('/Painel')
    }
  } 



    
  return (
  
    <div className={classes.submit}>
      <GoogleLogin
        clientId="500065680033-90nknfddkptn9mo9a6n3emn9q9cotcgh.apps.googleusercontent.com"
        buttonText="Se cadastrar com Gmail"
        theme={"dark"}
        onSuccess={Logar}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>

  );
}

