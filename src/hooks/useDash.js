import { useState } from 'react';
import api from '../../services/api'

export default function useAuth() {


  const [ listGroups, slistGroups ] = useState([]);
  const [ listCampanhas, setListCampanhas ] = useState([]);

  const [alerta, salerta] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    mensagem: "",
    type: ""
  });



















  async function handleListCampanhas() {
    try {
      const { data } = await api.get(`/ListCampanhas`);
      setListCampanhas(data)
    } catch (error) {
      console.log(error)
    }
  }


  async function handleListGrupo(id_campanhas) {
    try {
      const { data } = await api.get(`/ListGruposID/${id_campanhas}`);
      slistGroups(data)
    } catch (error) {
      console.log(error)
    }
  }


  async function handleCriaPaginaEntrada(dados) {
    try {
      await api.post(`/CreatPaginaEntrada`, dados);
    } catch (error) {
      console.log(error)
    }
  }




  async function handleCriaGroup(dados) {

    try {
      await api.post(`/CreatGrupos`,dados);
      await handleListGrupo(dados.id_campanha)
      await handleListCampanhas()
      
    } catch (error) {
      console.log(error)
    }
  }



  return { 

    handleListGrupo,
    handleCriaGroup,
    handleListCampanhas,
    handleCriaPaginaEntrada,

    alerta,
    listGroups,
    listCampanhas

  };
}