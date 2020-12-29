

import React from 'react';
import { Formik, Form, FieldArray ,Field} from 'formik';


import {
  InputTextoArry
} from '../../Inputs/Input';

import {
  InputText
} from '../../Inputs/Input';

import './styles.css';



function InviteFriends(
  { peguntas,
    marginLefthL,
    marginTopL,
    sizeLabelopc,
    sizeLabelpergunta,
    sizeInput,
    initialValuesArray
  }
) {  

  const initialValues = {
    "lista": [],
  };

  return(

    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>





        <Field 
                    type={"text"} 
                    id={1} 
                    name={1} 
                    
                  />





          <FieldArray name="lista">
            {({ insert, remove, push }) => (
              <div>
                <legend> COMUNICANTE DOMICILIAR 
                  <button
                    type="button"
                    onClick={() => push(initialValuesArray)}
                  >
                    + Novo Contato
                  </button>
                </legend>
                <fieldset>

                    {values.lista.length > 0 &&
                    values.lista.map((lista, index) => (
                      <div className="card_contato_interno" key={index}>
                        <div className="col">
                        <Field 
                    type={"text"} 
                    id={1} 
                    name={`lista.${index}`}
                    
                  />                        </div>

                    
                        <div className="col">
                          <button
                            type="button"
                            className="secondary"
                            onClick={() => remove(index)}
                          >X
                          </button>

                        </div>
                      </div>
                    ))}
                </fieldset>
              </div>
            )}
          </FieldArray>
          <button type="submit">Invite</button>
        </Form>
      )}
    </Formik>

);
                    }


export default InviteFriends;
