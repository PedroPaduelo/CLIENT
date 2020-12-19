import React from 'react';

import { Link } from 'react-router-dom';
import './styles.css'

import InputLadoaLado from "../../components/Inputs/InputText"

import { logar } from "../../services/auth/auth";

function Login() {

    
    return (    


        <div id="fundo-login" className="fundo-login-grid"> 
            <div id="painel-login" >
                <h1>Acessar o Sistema</h1>
                <div>
                    <form>
                        <div className="input-login-grid">
                            <label htmlFor="email" className="lebel-login">
                                Email
                            </label>
                            <InputLadoaLado 
                                className="input-login"
                                name="email" 
                                type="email"
                            />
                        </div>

                        <div className="input-login-grid">
                            <label htmlFor="senha" className="lebel-login">
                               Senha
                            </label>
                            <InputLadoaLado 
                                className="input-login"
                                name="senha" 
                                type="password"
                            />
                        </div>

                        <div id="esqueci-minha-senha-quero-cadastrar">
                            <Link to="/study" className="esqueci-minha-senha">
                                - Esqueci minha senha
                            </Link>

                            <Link to="/give-classes" className="se-cadastrar">
                                - Se cadastrar
                            </Link>
                        </div>
                        
                        <footer>
                            <button onClick={logar} className="btn-login">
                                Entrar
                            </button>
                        </footer>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
