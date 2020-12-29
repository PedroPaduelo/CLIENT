import React  from 'react';
import { Container, ContainerBody } from './styles';

import {
  MdFeaturedPlayList
} from 'react-icons/md';

import NavBar from '../../components/NavBar'
import DescUserLogado from "../../components/NavBar/DescUserLogado";
import LinkRout from '../../components/LinkRout'
import CainteinerLink from '../../components/LinkRout/CainteinerLink'

import {
  Switch,
  Route
} from "react-router-dom";


function desLogar() {
  localStorage.removeItem("esta_logado");
  window.location.reload(false);
  return ""
}



function MainBoard() {

  const rotasDash= [{   
    path: "/Dash_Board_interno/dd",
    name: "Type Forme de Epidemiologia",
    component: "",
  },
  {   
    path: "/Dash_Board_interno/Forme_Cad",
    name: "To do List",
    component: "Forme_CadReFatorado",
  },
]

  
  return (
      <Container>
        <NavBar fundoNavBar="linear-gradient(to bottom, #7159c1, #7159de)">
          <h1>
              Nommand
          </h1>

          <CainteinerLink>
            { 
            rotasDash.map(function(item){
                  return <LinkRout 
                      key={item.path}
                      activeOnlyWhenExact={true}
                      to={item.path} 
                      label={<MdFeaturedPlayList/>}
                  />
              })}
          </CainteinerLink>

          <DescUserLogado 
              onClick={desLogar}
              nomeUserLogad={"Myke Pedro"}
              cargoUserLogado={"Dev Full Stack"} 
              fotoUserLogado={"https://avatars1.githubusercontent.com/u/37857002?s=460&u=e865d59b45cd0caa12923ddc5df3dc424e1ca5b7&v=4"}
          />
        </NavBar>

        <ContainerBody>





        <Switch>
          {rotasDash.map((route, i) => (
            <Route key={i}  {...route}/>
          ))}
        </Switch>
        
    


        </ContainerBody>
        
      </Container>  

      
  )
}

export default MainBoard;