import { useState } from 'react';
import api from '../../services/api'

export default function useAuth() {
    const [open, setOpen] = useState(true);

    const [ rotas, setRotas ] = useState([])
    const [ loadingRotas, setloadingRotas ] = useState(false)


    async function handleRouts(idApp,email) {
      try {
        const { data } = await api.get(`/ListUserAppRouts`, {
          id_aplicacoes: idApp,
          email_user: email});


          setRotas(data)
          setloadingRotas(true)
        
      } catch (error) {
        console.log(error)
      }
    }




    const handleNaveBarClose = () => {
      setOpen(false);
    };

    const handleNaveBarOpen = () => {
      setOpen(true);
    };


  

    

  
  return { 


    handleNaveBarClose, 
    handleNaveBarOpen, 
    handleRouts,
    
    

    open,

    rotas,
    loadingRotas

  };
}