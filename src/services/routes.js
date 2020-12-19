import React from "react";
import { isAuthenticated } from "./auth/auth";

import { Route, Redirect } from "react-router-dom";

import Login from "../pages/Login";
import DragAndDrop from "../components/DragAndDrop/Board";
import Board from "../pages/Board";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
    <main>
      <PrivateRoute exact path="/logar" component={Login} />
      <Route exact path="/toDoListCanva" component={DragAndDrop} />
      <Route exact path="/rpas" component={Board} />
    </main>
);
export default Routes;
