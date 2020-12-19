import React , { useState } from 'react';
import { Container } from './styles';
import jobs from '../../services/jobs';
import Card from '../../components/Card';


function Board() {
  const [sftp, setsftp ] = useState("");
  const [hsm, sethsm ] = useState("");
  const [monitor, setmonitor ] = useState("");
  const [criaOA, setcriaOA ] = useState("");

  const [dowloadBW, setdowloadBW ] = useState("");
  const [dowloadPlusoft, setdowloadPlusoft ] = useState("");
  const [dowloadHugme, setdowloadHugme ] = useState("");
  const [dowloadPortalWHP, setdowloadPortalWHP ] = useState("");

  

  async function ProcessaSFTP(){
    setsftp("Start...")
    await  jobs
      .get(`/CorrigeSFTP`)
      .then((response) => {
        setsftp("Finalizado com sucesso!!!")
      })
      .catch((error) => {
        setsftp("Algo deu errado!!! " + error.message)
    });  
    
  }
  async function ProcessaHSM(){
    sethsm("Start...")
    await  jobs
      .get(`/CorrigeHSM`)
      .then((response) => {
        sethsm("Finalizado com sucesso!!!")
      })
      .catch((error) => {
        sethsm("Algo deu errado!!! " + error.message)
    });  
  }
  async function BaixarEConsolidarMonitor(){
    setmonitor("Start...")
    await  jobs
      .get(`/BaixarEConsolidarMonitor`)
      .then((response) => {
        setmonitor("Finalizado com sucesso!!! \n Temos " + response.data +" OV's para criar OA's")
      })
      .catch((error) => {
        setmonitor("Algo deu errado!!! " + error.message)
    });  
  }
  async function RpaCriaOA(){
    setcriaOA("Start...")
    await  jobs
      .get(`/RpaCriaOA`)
      .then((response) => {
        setcriaOA("Finalizado com sucesso!!!")
      })
      .catch((error) => {
        setcriaOA("Algo deu errado!!! " + error.message)
    });  
  }
  async function DowloadBW(){
    setdowloadBW("Start...")
    await  jobs
      .get(`/DowloadBW`)
      .then((response) => {
        setdowloadBW("Finalizado com sucesso!!!")
      })
      .catch((error) => {
        setdowloadBW("Algo deu errado!!! " + error.message)
    });  
  }
  async function DowloadPlusoft(){
    setdowloadPlusoft("Start...")
    await  jobs
      .get(`/DowloadPlusoft`)
      .then((response) => {
        setdowloadPlusoft("Finalizado com sucesso!!!")
      })
      .catch((error) => {
        setdowloadPlusoft("Algo deu errado!!! " + error.message)
    });  
  }
  async function DowloadHugme(){
    setdowloadHugme("Start...")
    await  jobs
      .get(`/DowloadHugme`)
      .then((response) => {
        setdowloadHugme("Finalizado com sucesso!!!")
      })
      .catch((error) => {
        setdowloadHugme("Algo deu errado!!! " + error.message)
    });  
  }
  async function DowloadPortalWHP(){
    setdowloadPortalWHP("Start...")
    await  jobs
      .get(`/DowloadPortalWHP`)
      .then((response) => {
        setdowloadPortalWHP("Finalizado com sucesso!!!")
      })
      .catch((error) => {
        setdowloadPortalWHP("Algo deu errado!!! " + error.message)
    });  
  }



  return (
      <Container >

        <Card directionChildren="column" width="200px" height="150px" >
          <button onClick={ProcessaSFTP}> Processa Bases SFTP </button>
          <p>
            {sftp}
          </p>
        </Card>
        <Card directionChildren="column" width="200px" height="150px" >
          <button onClick={ProcessaHSM}> Processa Bases HSM </button>
          <p>
            {hsm}
          </p>
        </Card>




        <Card directionChildren="column" width="200px" height="150px" >
          <button onClick={BaixarEConsolidarMonitor}> Cria bases Robo OA </button>
          <p>
            {monitor}
          </p>
        </Card>
 



        <Card directionChildren="column" width="200px" height="150px" >
          <button onClick={RpaCriaOA}> Inicía Robô de OAs </button>
          <p>
            {criaOA}
          </p>
        </Card>

        <Card corButton="#fd8f3b" directionChildren="column" width="200px" height="150px" >
          <button onClick={DowloadBW}> Dowload BW </button>
          <p>
            {dowloadBW}
          </p>
        </Card>
        <Card corButton="#fd8f3b" directionChildren="column" width="200px" height="150px" >
          <button onClick={DowloadPlusoft}> Dowload Plusoft </button>
          <p>
            {dowloadPlusoft}
          </p>
        </Card>
        <Card corButton="#fd8f3b" directionChildren="column" width="200px" height="150px" >
          <button onClick={DowloadHugme}> Dowload Hugme </button>
          <p>
            {dowloadHugme}
          </p>
        </Card>
        <Card corButton="#fd8f3b" directionChildren="column" width="200px" height="150px" >
          <button onClick={DowloadPortalWHP}> Dowload Portal WHP </button>
          <p>
            {dowloadPortalWHP}
          </p>
        </Card>
      </Container> 
  )
}

export default Board;

