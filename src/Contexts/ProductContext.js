import React, { useState, createContext, useContext, useEffect } from 'react';

import api from '../services/api'
import { AuthContext } from '../Contexts/AuthContext';


const ProductContext = createContext();

const prodFisrt = {
  email_user: "",
  googleanalitic: "",
  id: "",
  img1: "",
  img2: "",
  img3: "",
  linkbuy: "",
  linkpage: "",
  pixelfacebook: "",
  poductsubhead: "",
  price: "",
  produtcdescription1: "",
  produtcdescription2: "",
  produtcdescription3: "",
  produtcname: "",
  statusprodutc: "",
  whatsvendedor: "",
}



function ProductProvider({ children }) {

  const { user } = useContext(AuthContext)
  const [ toggleSelectPage, stoggleSelectPage ] = useState();
  const [ toggleListProd, stoggleListProd ] = useState(true);
  const [ toggleCria, stoggleCria ] = useState(false);
  const [ toggleEdit, stoggleEdit ] = useState(false);


  const [ listprod, slistprod ] = useState([]);
  const [ countProdUser, scountProdUser ] = useState(false);
  const [ prod, sprod ] = useState(prodFisrt);

  const [ alerta, salerta ] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    mensagem: "",
    type: ""
  });


  useEffect(() => {
      async function getItems() {
          try {
              const { data } = await api.get(`/ListProdutos/${user.email}`);
              slistprod(data)


              const count = await api.get(`/CountProdUser/${user.email}`);
              scountProdUser(count.data)


              if(data.length > user.capacidade )
              stoggleSelectPage(false)
              else
              stoggleSelectPage(true)

          } catch (error) {
              console.log(error)
          }
      }
      getItems();
  },[user]);


  const handleToggleCriaProd = () => {
    stoggleListProd(false)
    stoggleSelectPage(false)
    stoggleCria(true);
  };

  const handleToggleCriaProdGoBack = () => {
    stoggleListProd(true)
    stoggleCria(false)
    stoggleSelectPage(true)
  };



  const handleToggleEditProd = (prod) => {
    sprod(prod)
    stoggleListProd(false)
    stoggleSelectPage(false)
    stoggleEdit(true)
  };

  async function handleToggleEditProdGoBack(){
    stoggleListProd(true)
    await handleListProd(user.email)
    stoggleEdit(false)
  };





  async function handleCreatedProd(dados){
    const id = await api.post(`/CreatProdutos`, dados)
    salerta({
      open: true,
      vertical: 'top',
      horizontal: 'center',
      mensagem: "Produto Criado com sucesso!!!",
      type: "success"
    })

    await handleListProd(user.email)
    stoggleListProd(true)
    stoggleCria(false)
    
    return id
  };

  async function handleUpdataProd(dados){
    await api.put(`/UpdateProdutos`, dados)

    salerta({
      open: true,
      vertical: 'top',
      horizontal: 'center',
      mensagem: "Produto Alterado com sucesso!!!",
      type: "success"
    })

    await handleListProd(user.email)
    stoggleListProd(true)
    stoggleEdit(false)

  };




  async function handleListProd(email){
    try {
      const { data } = await api.get(`/ListProdutos/${email}`);
      slistprod(data)

      if(data.length > user.capacidade )
      stoggleSelectPage(false)
      else
      stoggleSelectPage(true)

    } catch (error) {
      console.log(error)
    }
  };

  async function handDeletProd(id){
    try {
      await api.delete(`/DeleteProdutos/${id}`);

      await handleListProd(user.email)
      
      salerta({
        open: true,
        vertical: 'top',
        horizontal: 'center',
        mensagem: "Produto Deletado com sucesso!!!",
        type: "success"
      })

    } catch (error) {
      console.log(error)
    }
  };










  async function handleProd(id) {
    try {
      const { data } = await api.get(`/ListProdutosById/${id}`);
      sprod(data)
    } catch (error) {
      console.log(error)
    }
  }



  async function handleAlert(){
    salerta({
      open: false,
      vertical: 'top',
      horizontal: 'center',
      mensagem: "",
      type: ""
    })
  };



  return (
    <ProductContext.Provider value={{ 
      handleToggleCriaProd, 
      handleToggleEditProd,
      handleToggleEditProdGoBack,
      handleToggleCriaProdGoBack,

      handleCreatedProd, 
      handleUpdataProd,
      handleListProd,
      handDeletProd,

      handleProd,
      handleAlert,

      toggleCria,
      toggleSelectPage,
      toggleEdit,
      toggleListProd,
      
      alerta,
      listprod,
      countProdUser,
      prod,

      
    }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };