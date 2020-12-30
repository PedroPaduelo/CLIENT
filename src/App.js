import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import Routes from "./services/routes";
import { ProvideAuth } from "./services/authContexto";


function App() {
    return (    
        <ProvideAuth>
            <BrowserRouter>
                <DndProvider backend={HTML5Backend}>
                    <Routes/>
                </DndProvider>
            </BrowserRouter> 
        </ProvideAuth>
    );
}

export default App;
