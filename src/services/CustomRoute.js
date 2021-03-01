import React , { useContext } from "react";
import { Route, Redirect} from "react-router-dom";

import { AuthContext } from '../Contexts/AuthContext';

import CustomLoadingOverlay from './CustomLoadingOverlay';


function CustomRoute({ isPrivate, redirectTO, ...rest }) {
  
  const { loading, authenticated } = useContext(AuthContext);

  if (isPrivate && loading) {
    return <CustomLoadingOverlay/>;
  }else{
    if (isPrivate && !authenticated) {
      return <Redirect to={redirectTO} />
    }else{
      return <Route {...rest} />;
    }
  }
}


export default CustomRoute;