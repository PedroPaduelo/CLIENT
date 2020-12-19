import React, { useState, useContext } from 'react';
import { useDrop } from 'react-dnd';
import {MdAdd} from 'react-icons/md';

import { Container } from './styles';
import BoardContext from '../Board/context'

import Modal from '../../Modal'
import Card from "../Card"

import InputText from "../../Inputs/InputText"



function List({ data, indexList }) {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const {moveItemDrop , registra} = useContext(BoardContext);

  const [content, setContent] = useState("");
  const [user, setUser] = useState("");

  const sizeLabelauxi = "1.6rem"


  function openModal() {
      setIsOpen(true);
  }
  function closeModal(){
      setIsOpen(false);
      setContent("")
      setUser("")
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if(content === "") return

    const card = {
      content: content,
      user: user,
      list_id: data.id,
      order_id: data.cards.length
    }

    await registra(card)
  }


  const [, dropRef] = useDrop({
    accept: "CARD",

    drop(item, monitor){
      const fromItem = item.fromItem;
      const fromList = item.fromList;
      const toList = indexList;
      let flagueMove = "LIST"

      if(toList === fromList )return;

      moveItemDrop(fromList,toList,fromItem,0,flagueMove)
      item.fromList = toList
    } 
  }) 

  return (
    <Container ref={dropRef} done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable === "true" && 
          <Modal  
            ContenteButton={<MdAdd size={20} color="#fff"/>}
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
          >
            <form onSubmit={handleSubmit}>
              <InputText
                sizeLabel={sizeLabelauxi}
                sizeInput="3rem"
                sizeInputLargura="100%"
                directionInputLabel="column"
                label="Descrição da Atividade"
                type="text"
                htmlFor="descAtiv"
                id="descAtiv"
                name="descAtiv"
                disabled={false}
                onChange={e => setContent(e.target.value)}
                value={content}
              />
              <InputText
                sizeLabel={sizeLabelauxi}
                sizeInput="3rem"
                sizeInputLargura="100%"
                directionInputLabel="column"
                label="Responsavel Atividade"
                type="text"
                htmlFor="respAtiv"
                id="respAtiv"
                name="respAtiv"
                disabled={false}
                onChange={e => setUser(e.target.value)}
                value={user}
              />
              <button>
                Cadastra atividades
              </button>
            </form>
          </Modal>
        }
        
      </header>

      <ul>
        {
          data.cards.map((card, index) => (<Card key={card.id} indexList={indexList} id_list={data.id} index={index} data={card}/>  ))
        }
      </ul>
    </Container>
  )
}

export default List;