import React from 'react';


import { 
  InputCheckted,
  InputText
} from './styles';




function InputTexto({ field, form, ...props }) {
  return (<InputText {...field} {...props}  />)}

export function InputCheck({ field, form, lebel, ...props }) {
  return (<InputCheckted {...field} {...props}  />)}



export default InputTexto;