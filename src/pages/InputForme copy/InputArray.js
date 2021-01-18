import React from 'react';
import * as Inputs from '../../components/Inputs';
import { Container } from './styles';


function InputArray({forme, fields}) {

  return(
        <div>

            <li>
                <button type="button" onClick={() => fields.push({})}>Add</button>
            </li>

            {fields.map((member, index) => (
                <div key={index}>
                    <button
                        type="button"
                        title="Remove Member"
                        onClick={() => fields.remove(index)}
                    />

                    {forme.questions.map( (pergunta) => {  
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
                    })}
                </div>
            ))}

        </div>
)}

export default InputArray;
