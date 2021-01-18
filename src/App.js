import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { Provider } from "react-redux";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Routes from "./services/routes";
import store from "./redux/store";

import { AuthProvider } from './Context/AuthContext';
import { DashProvider } from './Context/DashContext';
import { FormeProvider } from './Context/FormeContex';

import Global from "./assets/styles/global";

const theme = createMuiTheme({
    typography: {
      htmlFontSize: 10,
    }
  });

function App() {
    return (    
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <DashProvider>
                    <FormeProvider>
                        <BrowserRouter>
                            
                                <Global/>
                                <Provider store={store}>
                                    <Routes/>
                                </Provider>
                            
                        </BrowserRouter> 
                    </FormeProvider>
                </DashProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
