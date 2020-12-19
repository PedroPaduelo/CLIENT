import React , { useState, useEffect } from 'react';
import produce  from 'immer'

import { Container } from './styles';
import List from "../List"

import BoardContext from './context'

import api from '../../../services/api';


function Board() {
  const [lists, setLists ] = useState([]);
  
  useEffect(() => {
    api
      .get("/lists")
      .then((response) => {
      setLists(response.data);
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });
  }, []);

  async function moveItemDrop( fromList, toList, fromItem, toItem, flagueMove ){

    if(flagueMove === "LIST"){

      const teste = produce(lists, draft=>{
        const dragged = draft[fromList].cards[fromItem]
        draft[fromList].cards.splice(fromItem, 1);
        draft[toList].cards.push(dragged);
      })

      let teste2 = []

      teste[toList].cards.forEach(function (item, indice, array) {

        teste2.push({
                      id: item.id,
                      order_id: indice,
                      list_id: teste[toList].id
                    }
        )
      }); 

      api
      .put(`/cards`, teste2)
      .then((response) => {
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      }); 

      setLists(teste);
    }
  }

  async function moveItemHover( fromList, toList, fromItem, toItem, flagueMove){

    if(flagueMove === "CARD"){

      const teste = produce(lists, draft=>{
        const dragged = draft[fromList].cards[fromItem]
        draft[fromList].cards.splice(fromItem, 1);
        draft[toList].cards.splice(toItem, 0, dragged);
      })

      let teste2 = []

      teste[toList].cards.forEach(function (item, indice, array) {

        teste2.push({
                      id: item.id,
                      order_id: indice,
                      list_id: teste[toList].id
                    }
        )


      }); 


     api
      .put(`/cards`, teste2)
      .then((response) => {
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });  


      setLists( teste );
    }
  }

  async function registra(card){

    await  api
      .post(`/cards`, card)
      .then((response) => {
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
    });  
 
    await api
      .get("/lists")
      .then((response) => {
      setLists(response.data);
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar os items");
      });    
  }



  return (
    <BoardContext.Provider value={{lists, moveItemDrop, moveItemHover, registra}}>
      <Container>
          {lists.map((itenlist , index)=> (<List  key={itenlist.title} indexList={index} data={itenlist} />))}
      </Container>  
    </BoardContext.Provider>
  )
}

export default Board;