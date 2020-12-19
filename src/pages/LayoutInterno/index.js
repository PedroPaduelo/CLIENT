import React  from 'react';
import { Container, ContainerBody } from './styles';

import Routes from "../../services/routes";

import NavBar from '../../components/NavBar'
import DescUserLogado from "../../components/NavBar/DescUserLogado";
import LinkRout from '../../components/LinkRout'
import CainteinerLink from '../../components/LinkRout/CainteinerLink'

function desLogar() {
  localStorage.removeItem("esta_logado");
  window.location.reload(false);
  return ""
}

function MainBoard(props) {
  
  return (
      <Container>
        <NavBar fundoNavBar="linear-gradient(to bottom, #7159c1, #7159de)">
          <h1>
              Nommand
          </h1>

          <CainteinerLink>
            { 
            props.links.map(function(item){
                return <LinkRout 
                    key={item.link}
                    activeOnlyWhenExact={true}
                    to={item.link} 
                    label={<item.icon/>}
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
            <Routes/>
        </ContainerBody>
        
      </Container>  

      
  )
}

export default MainBoard;