
import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "../actionTypes";


import api from '../../services/api';


export function addTodo(content) {

  return dispatch => (
       api.post(`/LogarUser`, content)
          .then(resp => {
            console.log(resp)
              dispatch(
                  { type: ADD_TODO, payload: resp.data }
              )
          })
          .catch(e => {
            console.log(e)
          })
  )
}





export const addTodo2 = (content) => {
  return dispatch => {
    api.post(`/LogarUser`, content)
          .then(resp => dispatch({ type: ADD_TODO, payload: resp.data }))
  }
}



export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
