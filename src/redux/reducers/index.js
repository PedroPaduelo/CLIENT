import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';
import account from '../../pages/AppProcVida/FormePacienteIndex/formes/account';
import todos from "./todos";

export default combineReducers({ 
    form: reduxFormReducer,
    todos,
    account
});
