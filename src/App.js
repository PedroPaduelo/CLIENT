import React from "react";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { AuthProvider } from './Contexts/AuthContext';
import { ProductProvider } from './Contexts/ProductContext';

import Routes from "./routes";


const theme = createMuiTheme({
    typography: {
        htmlFontSize: 10,
        fontFamily: 'Montserrat'
    }
});

  
function App() {
    return (    
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <ProductProvider>
                    <BrowserRouter>
                        <Routes/>
                    </BrowserRouter> 
                </ProductProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
