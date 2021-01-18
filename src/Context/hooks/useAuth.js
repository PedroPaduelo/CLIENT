import { useState, useEffect } from 'react';
import api from '../../services/api';


export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(false);
  const [apps, setApp] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
      const token = localStorage.getItem('token');
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;

      async function getUser() {
          try {

            const { data } = await api.get(`/userToken`);
            
            setApp(data.apps)
            setUser(data)

          } catch (error) {
            console.log(error)
          }
        }

      if (token) {
      
      getUser();
      setAuthenticated(true);
      }

      setLoading(false);
  }, []);





  async function handleSignup({
    fistname ,
    lastname ,
    email ,
    password,
    nomeorganizacao }) {
      
    const {data} = await api.post(`/user`, {
      fistname ,
      lastname ,
      email ,
      password,
      nomeorganizacao
    })

    if(data){
      return {
        statusAlaerty: "success",
        mensagem: "Cadastro feito com sucesso !!!",
        redirect: true
      }
    }
    else{
      return {
        statusAlaerty: "info",
        mensagem: "User ja cadastrado!!!",
        redirect: false
      }
    }      
  }


  





















    async function handleLogin(email ,password) {
        const {data} = await api.post(`/userLogin`, {email,password})
        setApp(data.apps)
        setUser(data)     

        localStorage.setItem('token', JSON.stringify(data.token));
        api.defaults.headers.Authorization = `Bearer ${data.token}`;

        setAuthenticated(true);

    }




    










    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
    }

    async function handleRotas({rota}) {
      return" data"
    }



    

  
  return { 


    user, 
    apps, 

    authenticated, 


    loading, 
  
    handleSignup,

    handleLogin, 
    handleLogout,

    handleRotas,

  };
}