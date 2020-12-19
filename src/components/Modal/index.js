import React from 'react';

import Modal from 'react-modal';

function Modals({children, ModalCss, ContenteButton, modalIsOpen, openModal, closeModal }) {


    return (
        <div>
            <button onClick={openModal}>{ContenteButton}</button>
            <Modal
                isOpen={modalIsOpen}
                style={ModalCss}
                contentLabel="Example Modal"
                >
                    <h2>Cadastra Atividades</h2>
                    
                    {children}

                    <button onClick={closeModal}>close</button>

                    
                </Modal>
            
        </div>
    )}

export default Modals;