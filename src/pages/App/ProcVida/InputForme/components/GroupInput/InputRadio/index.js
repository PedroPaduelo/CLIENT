import React from 'react';

import './styles.css'



function GroupInput({name, label, htmlFor, opc, ...rest}) {
  return (
    <div className="input-block">

        <label htmlFor={name}>
           {label}
        </label>

        {opc.map((opc)=> {
          return ([
            <div className="input-block2">
              <input value={opc.id} id={htmlFor} type={opc.tipo_input} name={name} {...rest}/>
              <label htmlFor={htmlFor}>{opc.desc_opc}</label>
            </div>
          ])
        })}

    </div>
  );
}

export default GroupInput;
