import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import {
    MdFeaturedPlayList,
    MdAutorenew
} from 'react-icons/md';

// funçaõ de altenticação de logar
import { isAuthenticated } from "./services/auth/auth";

import Login from "./pages/Login";
import LayoutInterno from "./pages/LayoutInterno";
import GLobalStyle from './assets/styles/global'




function App() {


    function logar(){
        const links = [{   "link": "/toDoListCanva",
                            "name": "To do List",
                            "icon": MdFeaturedPlayList,
                        },

                        {   "link": "/rpas",
                            "name": "Automações",
                            "icon": MdAutorenew,
                        },

        ]

        
        if(isAuthenticated()==="true"){
            return (
                <LayoutInterno links={links}/>

                )
        }else{
            return <Login/>
        }
    };
    

    return (    
        <BrowserRouter>
            <DndProvider backend={HTML5Backend}>
                {logar()}
                <GLobalStyle/>
            </DndProvider>
        </BrowserRouter> 
    );
}

export default App;
