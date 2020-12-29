import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "./authContexto";


import Dashboard from "../pages/Dashboard";


// Aplicação da Proc Vida Extra
import PainelGeral from "../pages/App/ProcVida/PainelGeral";
import FormeEpidemiologico from "../pages/App/ProcVida/InputForme/pages/Forme_CadReFatorado";




function PrivateRoute({component: Component, redirectTO, ...rest }) {
  const {validar} = useAuth();
  return (
    <Route
      {...rest}
      render={({ location , ...props}) =>
      validar() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectTO,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const rotasBase = [
  {   
    path: "/",
    name: "To do List",
    componente: "LoginNommand/index",
  },
  {   
    path: "/SignUp_Nommand",
    name: "To do List",
    componente: "LoginNommand/SignUp",
  },
  {   
    path: "/Login_ProcVida_Dash",
    name: "To do List",
    componente:  "App/ProcVida/LoginProcVida/index",
  }
]




function Routes(){
  return(
    <>
      {
        rotasBase.map( (route, i) => {
          return <Route exact key={i} component={require("../pages/"+ route.componente).default} {...route} />
        })
      }

      <PrivateRoute path="/Painel_ProcVida" redirectTO={"/Login_ProcVida_Dash"} component={PainelGeral} />
      <PrivateRoute path="/Dash_Board_interno" redirectTO={"/"} component={Dashboard} />
      <PrivateRoute path="/Forme_Epidemiologico" redirectTO={"/Login_ProcVida_Dash"} component={FormeEpidemiologico} />
    </>
  );
}

export default Routes;
