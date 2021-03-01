import React, {useContext, useEffect} from 'react';

import { useParams } from "react-router-dom";


import CardProd from './CardProdML';

import { ProductContext } from '../../Contexts/ProductContext';


function PageProduto() {
  const { handleProd, prod } = useContext(ProductContext)
  let { id } = useParams();


    useEffect(() => {
        async function getItems() {
            try {
                await handleProd(id)
            } catch (error) {
                alert("Ocorreu um erro ao buscar os items");
            }
        }
        getItems();
    }, []);


  return (
    <CardProd prod={prod}/>
      
  );
}

export default PageProduto;