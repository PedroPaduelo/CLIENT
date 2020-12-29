import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

import InputModel, {InputCheck} from './CamposForme/InputModel';
import { BiMessageSquareAdd, BiMessageSquareMinus } from 'react-icons/bi';


import { 
  Label,
  Container,
  InputGroup
} from './styles';


export function MyFieldArray({ values, tituloDaSecao, dados , listaDeComunicantesE}) {
  
  return (
        <FieldArray name={dados.nome_lista_de_resposta}>
          {({ insert, remove, push , unshift}) => (
            
            <div>
              <legend> {tituloDaSecao}
                <button
                  type="button"
                  onClick={() => push()}
                >
                  <BiMessageSquareAdd size="3rem"/>
                </button>
              </legend>
   

              <fieldset>
                {values[`${dados.nome_lista_de_resposta}`].length > 0 &&
                values[`${dados.nome_lista_de_resposta}`].map((lista, index) => (
                  <div className="card_contato_interno_exluir" key={index}>
                    
                    <button
                      type="button"
                      className="card_contato_interno_exluir_btn"
                      onClick={() => remove(index)}
                    >
                      <BiMessageSquareMinus size="3rem"/>
                    </button>
                    <p className="card_indice">{`Contato numero: ${index+1}`}</p>

                    <div className="card_contato_interno" key={index}>
                      {dados.perguntas.map( (pergunta) => {  
                        
                        return (
                          <div key={pergunta.id}>
                            
                            { pergunta.tipo_imput_grop === "checkdet" &&
                              <Container marginBottom="4rem">
                                <Label 
                                  marginLefth="0.3rem"
                                  marginTop="0.1rem"
                                >
                                  {pergunta.desc_pergunta}
                                </Label>
                    
                                {pergunta.opc.map( (opc) => {  
                                  console.log(`${dados.nome_lista_de_resposta}.${index}.${opc.name}`)
                                  return (
                                    <InputGroup
                                      key={opc.id}
                                      flex_direction="row"
                                    >
                                      <Field
                                        component={InputCheck}
                                        id={`${opc.id}_${index}`}
                                        name={`${dados.nome_lista_de_resposta}.${index}.${opc.name}`}
                                        type={opc.type}
                                        value={`${opc.value}`}
                                        sizeWidth={"2.0rem"} 
                                        sizeHeight={"2.0rem"}
                                      />
                        
                                      <Label 
                                        htmlFor={`${opc.id}_${index}`}
                                        marginLefth="0.3rem"
                                        marginTop="0.3rem"
                                        sizeLabel="1.7rem"
                                      >
                                        {opc.desc_opc}
                                      </Label>
                                    </InputGroup>
                                  )
                                })}
                              </Container>
                            }

                            { pergunta.tipo_imput_grop === "aberta" &&
                              <Container marginBottom="4rem">
                                <Label 
                                  marginLefth="0.3rem"
                                  marginTop="0.1rem"
                                >
                                  {pergunta.desc_pergunta}
                                </Label>
                    
                                {pergunta.opc.map( (opc) => {  
                                  console.log(`${dados.nome_lista_de_resposta}.${index}.${opc.name}`)
                                  return (
                                    <InputGroup
                                      key={opc.id}
                                      flex_direction="row"
                                    >
                                      <Field
                                        component={InputModel}
                                        id={opc.id}
                                        name={`${dados.nome_lista_de_resposta}.${index}.${opc.name}`}
                                        type={opc.type}
                                        sizeWidth={"90%"} 
                                        sizeHeight={"3.4rem"}
                                      />
                                    </InputGroup>
                                  )
                                })}
                              </Container>
                            }

                          </div> 
                        )
                      })}
                    </div>
                  </div>
                ))}
              </fieldset>
            </div>
          )}
        </FieldArray>
)}


function Forme({initialValues, forme, ...props}) {



  return(
  <div>

    <Formik
      initialValues={initialValues}

      onSubmit={ (values) => { 
        let campos = Object.keys(values)
        let listaResposta =  []
        let listaRespostaArray =  []
        
        campos.map(async function(campo) {
          if(!Array.isArray(values[`${campo}`])){
            listaResposta.push({
              resposta: values[`${campo}`],
              id_pergunta: campo,

            });
          }else{
            listaRespostaArray.push({
              resposta: values[`${campo}`],
              id_pergunta: campo
            });
          }
        });

        console.log(listaRespostaArray);
        console.log(listaResposta);


      }}
    >

      {({ values }) => (
        <Form>

          {forme.secao_do_formulario.map( (secao) => {  
            return (
              <div key={secao.id}>

                { secao.tipo_secao === "info" &&
                 <footer>
                    <img src={secao.obs.icone} alt="Aviso importante" />
                    <p>
                      {secao.obs.texto_obs}
                    </p>
                </footer>
                }
                
                { secao.tipo_secao === "pergunta" &&
                  <fieldset id="sesscaoForme" key={secao.id}>
                    <legend> {secao.tituloDaSecao} </legend>
                    {secao.perguntas.map( (pergunta) => {  
                      return (
                        <div key={pergunta.id}>
                          
                          {/* São inputos de Checar/flegar, sim/não, true or false */}
                          { pergunta.tipo_imput_grop === "checkdet" &&
                            <Container
                            marginBottom="4rem"
                            >
                              <Label 
                                marginLefth="0.3rem"
                                marginTop="0.1rem"
                              >
                                {pergunta.desc_pergunta}
                              </Label>
                  
                              {pergunta.opc.map( (opc) => {  
                                return (
                                  <InputGroup
                                    key={opc.id}
                                    flex_direction="row"
                                  >
                                    <Field
                                      component={InputCheck}
                                      id={opc.id}
                                      name={opc.id_pergunta}
                                      type={opc.type}
                                      value={`${opc.value}`}
                                      sizeWidth={"2.0rem"} 
                                      sizeHeight={"2.0rem"}
                                    />
                      
                                    <Label 
                                      htmlFor={opc.id}
                                      marginLefth="0.3rem"
                                      marginTop="0.3rem"
                                      sizeLabel="1.7rem"
                                    >
                                      {opc.desc_opc}
                                    </Label>
                                  </InputGroup>
                                )
                              })}
                            </Container>
                          }

                          {/* São inputos abertos de escrita do usuario */}
                          { pergunta.tipo_imput_grop === "aberta" &&
                            <Container
                              marginBottom="4rem"
                            >
                              <Label 
                                marginLefth="0.3rem"
                                marginTop="0.1rem"
                              >
                                {pergunta.desc_pergunta}
                              </Label>
                  
                              {pergunta.opc.map( (opc) => {  
                                return (
                                  <InputGroup
                                    key={opc.id}
                                    flex_direction="row"
                                  >
                                    <Field
                                      component={InputModel}
                                      id={opc.id}
                                      name={opc.id_pergunta}
                                      type={opc.type}
                                      sizeWidth={"90%"} 
                                      sizeHeight={"3.4rem"}
                                    />
                                  </InputGroup>
                                )
                              })}
                            </Container>
                          }

                        </div> 
                      )
                    })}
                  </fieldset> 
                }

                { secao.tipo_secao === "arrayDePerguntas" &&
                  <fieldset id="sesscaoForme">
                    <MyFieldArray    
                      initialValues={initialValues}
                      tituloDaSecao={secao.tituloDaSecao}        
                      values={values}
                      dados={secao}
                    />
                  </fieldset> 
                }

              </div>
            )
          })}











          

 

          {props.children}
        </Form>
      )}

    </Formik>
  </div>
)}

export default Forme;
