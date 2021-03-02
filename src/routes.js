import React from "react";

import { Switch } from "react-router-dom";
import CustomRoute from './services/CustomRoute'

import Login from "./Layout/Login";
import Dashboard from "./Layout/Dashboard";
import PageProduto from "./pages/PageProduto";


function Routes(){
  
  return(
    <Switch>

      <CustomRoute exact path="/" redirectTO={"/"} component={Login} /> 

      <CustomRoute isPrivate path="/Painel" redirectTO={"/"} component={Dashboard}/> 

      <CustomRoute exact path="/:prodname/:id" redirectTO={"/"} component={PageProduto} />

    </Switch>
  );
}

export default Routes;











































