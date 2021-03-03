import React, {useState, useEffect} from 'react';

import { useParams } from "react-router-dom";
import CardProd from './CardProdML';


import api from '../../services/api'

function PageProduto() {
  let { id } = useParams();
  let { prodname } = useParams();
  const [ prod, sprod ] = useState([]);

console.log(prodname)

    useEffect(() => {
        async function getItems() {
            try {
                const { data } = await api.get(`/ListProdutosById/${id}`);
                sprod(data)
            } catch (error) {
                console.log(error)
            }
        }
        getItems();
    },[id]);


  return (
    <CardProd prod={prod}/>
      
  );
}

export default PageProduto;