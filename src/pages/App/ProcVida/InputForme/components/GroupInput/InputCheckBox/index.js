import React from 'react';

import './styles.css'


function GroupInput({name, label, opc, ...rest}) {
  return (
    <div className="input-block">

        <label htmlFor={name}>
           {label}
        </label>

        {opc.map((opc)=> {
          return (
            <input type={opc.tipo_input} id={name} name={name} {...rest}/>
          )
        })}






        
    </div>
  );
}

export default GroupInput;
