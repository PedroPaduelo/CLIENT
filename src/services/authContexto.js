// Hook (use-auth.js)
import React, { useContext, createContext } from "react";
import api from './api';
const userKey = 'user_nommand'
const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email, password) => {
    return (api
          .post(`/LogarUser`, {email,password})
            .then((response) => {
              localStorage.setItem(userKey, JSON.stringify(response.data))
              return true
          })
          .catch((error) => {
            return false
          }))
  };

  const signup = (fistName, lastName, email, password ) => {
    return ( api
        .post(`/sendMessage`, {
          fistName, 
          lastName,
          email,
          password
      })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
      })
    )
  };

  const sendWhats = (message, to_number ) => {
    console.log( message,  to_number)
    return ( api
        .post(`/sendMessage`, {
          message, 
          to_number
      })
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
      })
    )
  };

  const validar = () => {
    const data =  JSON.parse(localStorage.getItem(userKey))
    if(data){
      return  (api
            .post(`/ValidateTokenUser`, {token: data.token})
              .then((response) => {
                return true
            })
            .catch((error) => {
              return false
            }))
    }else{
      return false
    }
  };

  const signout = () => {
    localStorage.removeItem(userKey)
    return "OK"
  };

  const sendPasswordResetEmail = email => {
    return ""
  };

  const confirmPasswordReset = (code, password) => {
    return ""
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  // useEffect(() => {
  //   //validar()
  // }, []);
  
  // Return the user object and auth methods
  return {
    signin,
    signup,
    signout,
    sendWhats,
    sendPasswordResetEmail,
    confirmPasswordReset,
    validar
  };
}