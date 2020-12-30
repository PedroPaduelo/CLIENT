import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


import TextField from '@material-ui/core/TextField';



import './styles.css'
  
const theme = createMuiTheme({
    typography: {
      htmlFontSize: 9,
    },
});

function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');


    return (
        <ThemeProvider theme={theme}>
            <div id="page-landing"> 
                    <div id="page-langding-content" >


                        <div className="logo-container">
                            <h1>Formulario epidemiologico</h1>
                            <h3>Formulario de Validação do contagio</h3>
                        </div>


                        <div className="inputs-container">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                id="Codigo"
                                label="Código"
                                name="Codigo"
                                autoFocus
                                value={email}
                                onChange={(e)=>{setemail(e.target.value)}}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                name="password"
                                label="Senha"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e)=>{setpassword(e.target.value)}}
                            />
                        </div>



                        <div className="buttons-container">
                            <Link to="/Forme_Epidemiologico" className="give-classes">
                                Entrar
                            </Link>
                        </div>



                    </div>
            </div>
        </ThemeProvider>
        
    );
}

export default Login;
