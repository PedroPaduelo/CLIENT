import React from 'react';

import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '600px'
  }
}

function Modals({children, ContenteButton, modalIsOpen, openModal, closeModal }) {


    return (
        <div>
            <button onClick={openModal}>{ContenteButton}</button>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                >
                    <h2>Cadastra Atividades</h2>
                    
                    {children}

                    <button onClick={closeModal}>close</button>

                    
                </Modal>
            
        </div>
    )}

export default Modals;