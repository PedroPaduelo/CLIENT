import React from "react";

import { Switch } from "react-router-dom";
import CustomRoute from './CustomRoute'


import LoginNommand from "../pages/LoginNommand";

import Pricing from "../pages/Pricing";

import SignUp from "../pages/LoginNommand/SignUp";

import Dashboard from "../components/Dashboard";

import FormePacienteIndex from "../pages/AppProcVida/FormePacienteIndex";



function Routes(){
  
  return(
    <Switch>
      <CustomRoute exact path="/" redirectTO={"/"} component={LoginNommand} /> 
      <CustomRoute exact path="/SignUpNommand" redirectTO={"/"} component={SignUp} /> 


      <CustomRoute isPrivate path="/Nommand" redirectTO={"/"} component={()=> <Dashboard id="0"/>} /> 
      <CustomRoute isPrivate path="/ProcVida" redirectTO={"/"} component={()=> <Dashboard id="1"/>} /> 
      <CustomRoute exact path="/FormePacienteIndex/:id_paciente/:cod_acesso" redirectTO={"/"} component={()=> <FormePacienteIndex/>} /> 

      <CustomRoute exact isPrivate path="/Pricing/:id_app" redirectTO={"/"} component={()=> <Pricing/>} /> 

    </Switch>
  );
}

export default Routes;











































