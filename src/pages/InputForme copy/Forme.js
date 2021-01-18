import React from 'react';
import * as Inputs from '../../components/Inputs';
import { Container } from './styles';

import {submit} from "./showResults";
import InputArray from "./InputArray";

import { reduxForm , FieldArray} from 'redux-form';

function Forme({forme, ...props}) {
  const { handleSubmit } = props;


  return(
   
  <div>
        <form onSubmit={handleSubmit} >
          <div>
            


          { forme.sectiontype === "array" &&
            <FieldArray name={forme.sectiondesc} component={() => <InputArray pergunta={forme.questions} /> } />
          }




          { forme.sectiontype !== "array" &&
            forme.questions.map( (pergunta) => {  
              return (
                <div key={pergunta.id}>
                  
                  { pergunta.questionalertstype === "check" &&
                    <Container marginBottom="4rem">
                      <Inputs.Radio pergunta={pergunta} />
                    </Container>
                  }

                  { pergunta.questionalertstype === "open" &&
                    <Container marginBottom="4rem">
                      <Inputs.Text pergunta={pergunta} />
                    </Container>
                  }

                </div> 
              )
            })
          }








            



          </div>

          {props.children}
        </form>
  

  </div>
)}

export default reduxForm({
  form: 'remoteSubmit',
  onSubmit: submit
})(Forme);
