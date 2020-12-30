import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './styles.css'

import TextField from '@material-ui/core/TextField';
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { useHistory } from 'react-router-dom';
import { useAuth }   from "../../../../services/authContexto";

const theme = createMuiTheme({
    typography: {
      htmlFontSize: 9,
    },
});
  

function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const history = useHistory();
    const auth = useAuth() 

    async function logar(){
        if(await auth.signin(email ,password)){
          history.push('/Painel_ProcVida/Dashboard_Epdemiologia')
        }
      } 

    return (
        <ThemeProvider theme={theme}>
            <div id="fundo-login" className="fundo-login-grid"> 
                <div id="painel-login" >
                    <h1>Acessar o Sistema</h1>
                    <div>
                        <form>
                            <div className="input-login-grid">
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoFocus
                                    value={email}
                                    onChange={(e)=>{setemail(e.target.value)}}
                                />
                            </div>

                            <div className="input-login-grid">
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Senha"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e)=>{setpassword(e.target.value)}}
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
                                <button to="Painel_ProcVida" className="btn-login" type="button" onClick={logar}>
                                    Entrar
                                </button>
                            </footer>
                        </form>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Login;
