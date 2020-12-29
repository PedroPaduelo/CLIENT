import React from 'react';

import './styles.css'
// import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
// import api from '../../services/api';




function Card_list({teacher}) {
    // function creatNewConnection (){
    //     api.post('connections', {
    //         user_id: teacher.id,
    //     })
    // }


    return (
        <main>
            <article className="teacher-item"> 
                <header>
                    <img alt="adsd" src={teacher.avatar}/>
                    <div>
                        <strong>{teacher.name}</strong>
                        <span>{teacher.subject}</span> 
                    </div>
                </header>
                <p>
                    {teacher.bio}
                </p>
                <footer>
                    <p>
                        Preço/Hora
                        <strong>R$ {teacher.cost}</strong>
                    </p>
                    <a  target="#"
                        onClick={()=>{}}//creatNewConnection}
                        href={`https://wa.me/+55${teacher.whatsapp}?text=Eu%20tenho%20interesse%20no%20seu%20carro%20à%20venda`}>
                        <img src={"whatsappIcon"} alt="whatsapp" />
                        Entre em contato
                    </a>
                </footer>
            </article>
        </main>
    );
}

export default Card_list;
