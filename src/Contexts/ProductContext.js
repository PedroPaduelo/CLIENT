import React, { useState, createContext } from 'react';

import api from '../services/api'



const ProductContext = createContext();

function ProductProvider({ children }) {

  const [ toggle, stoggle ] = useState(false);
  const [ listprod, slistprod ] = useState([]);
  const [ prod, sprod ] = useState([]);

  const [ alerta, salerta ] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
    mensagem: "",
    type: ""
  });




  const handleToggleProd = () => {
    stoggle(!toggle);
  };




  async function handleCreatedProd(dados){
    const id = await api.post(`/CreatProdutos`, dados)
    stoggle(!toggle);
    salerta({
      open: true,
      vertical: 'top',
      horizontal: 'center',
      mensagem: "Produto Criado com sucesso!!!",
      type: "success"
    })
    return id
  };

  async function handleListProd(){
    try {
      const { data } = await api.get(`/ListProdutos`);
      slistprod(data)
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
      handleToggleProd, 
      handleCreatedProd, 
      handleListProd,
      handleProd,
      handleAlert,

      toggle,
      alerta,
      listprod,
      prod,
    }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };