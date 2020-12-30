import React from 'react';

import PageHeader from '../../components/PageHeader';
import Forme from '../../components/Formes';
import warningIcon from '../../assets/warning.svg'

import '../../assets/global.css'
import './styles.css'




function TypeFormes() {

  const initialValues = {
  "listaDeComunicantesD": [
    {
      "nomeContactante":"",
      "telefoneContactante":""
    }
  ],
  "listaDeComunicantesE": [
    {
      "dataDoContato":"",
      "localdocontato":"",
      "cepcontatoexterno":"",
      "nomeContactante":"",
      "telefoneContactante":"",
    }
  ],
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    16: "",
    17: "",
    23: ""
  };

  const forme = {
    "forme": {
      "id": 1,
      "titulo_forme": "Formulario epidemiológico",
      "desc_forme": "Preste bem atenção, pois o preenchimento deste formulario e de inteira responsabilidade do paciente!!!",
      "link_de_acesso": "forme_epidemiologico_covide_19",
      "obs":{},
      "secao_do_formulario": [
        {
          "id":1,
          "tituloDaSecao": "Dados Pessoais",
          "descricaoDaSecao": "Seus Dados dados do paciente",
          "tipo_secao":"pergunta",
          "perguntas": [
            {
              "id": 1,
              "desc_pergunta": "SOBRE SUA OCUPAÇÃO",
              "tipo_imput_grop": "checkdet",
              "orden_apresentacao": 1,
              "component": "",
              "opc": [
                {
                  "id": 1,
                  "desc_opc": "Trabalho remunerado",
                  "type": "radio",
                  "name": "ocupacao",
                  "value": "1",
                  "placeholder": "",
                  "id_pergunta": 1
                },
                {
                  "id": 2,
                  "desc_opc": "Recebo aposentadoria ou auxílio INSS",
                  "type": "radio",
                  "name": "ocupacao",
                  "value": "2",
                  "placeholder": "",
                  "id_pergunta": 1
                },
                {
                  "id": 3,
                  "desc_opc": "Estou desempregado (a)",
                  "type": "radio",
                  "name": "ocupacao",
                  "value": "3",
                  "placeholder": "",
                  "id_pergunta": 1
                },
                {
                  "id": 4,
                  "desc_opc": "Não exerço trabalho remunerado",
                  "type": "radio",
                  "name": "ocupacao",
                  "value": "4",
                  "placeholder": "",
                  "id_pergunta": 1
                },
                {
                  "id": 5,
                  "desc_opc": "Faço trabalho voluntario",
                  "type": "radio",
                  "name": "ocupacao",
                  "value": "5",
                  "placeholder": "",
                  "id_pergunta": 1
                }
              ]
            },

            {
              "id": 2,
              "desc_pergunta": "SELECIONE SUA ÁREA DE ATUAÇÃO PROFISSIONA",
              "tipo_imput_grop": "checkdet",
              "orden_apresentacao": 2,
              "component": "",
              "opc": [
                {
                  "id": 6,
                  "desc_opc": "Construção",
                  "type": "radio",
                  "name": "areaAtuacao",
                  "value": "6",
                  "placeholder": "",
                  "id_pergunta": 2
                },
                {
                  "id": 7,
                  "desc_opc": "Varejo",
                  "type": "radio",
                  "name": "areaAtuacao",
                  "value": "7",
                  "placeholder": "",
                  "id_pergunta": 2
                },
                {
                  "id": 8,
                  "desc_opc": "Industria",
                  "type": "radio",
                  "name": "areaAtuacao",
                  "value": "8",
                  "placeholder": "",
                  "id_pergunta": 2
                },
                {
                  "id": 9,
                  "desc_opc": "ADM",
                  "type": "radio",
                  "name": "areaAtuacao",
                  "value": "9",
                  "placeholder": "",
                  "id_pergunta": 2
                }
              ]
            },

            {
              "id": 3,
              "desc_pergunta": "ESCREVA O NOME DA SUA EMPRESAOBRE SUA OCUPAÇÃO",
              "tipo_imput_grop": "aberta",
              "orden_apresentacao": 3,
              "component": "",
              "opc": [
                {
                  "id": 10,
                  "desc_opc": "",
                  "type": "text",
                  "name": "nomeEmpresa",
                  "value": "",
                  "placeholder": "",
                  "id_pergunta": 3
                }
              ]
            },

            {
              "id": 4,
              "desc_pergunta": "FOI AFASTADO DO TRABALHO?",
              "tipo_imput_grop": "checkdet",
              "orden_apresentacao": 4,
              "component": "",
              "opc": [
                {
                  "id": 11,
                  "desc_opc": "Sim",
                  "type": "radio",
                  "name": "afastado",
                  "value": "11",
                  "placeholder": "",
                  "id_pergunta": 4
                },
                {
                  "id": 12,
                  "desc_opc": "Não",
                  "type": "radio",
                  "name": "afastado",
                  "value": "12",
                  "placeholder": "",
                  "id_pergunta": 4
                }
              ]
            },

            {
              "id": 5,
              "desc_pergunta": "QUANDO VOCÊ FOI AFASTADO DO TRABALHO?",
              "tipo_imput_grop": "aberta",
              "orden_apresentacao": 5,
              "component": "",
              "opc": [
                {
                  "id": 13,
                  "desc_opc": "",
                  "type": "date",
                  "name": "dataDoAfastamento",
                  "value": "",
                  "placeholder": "",
                  "id_pergunta": 5
                }
              ]
            }
          ]
        },

        {
          "id":2,
          "tituloDaSecao": "SOBRE A COVID-19",
          "descricaoDaSecao": "SOBRE A COVID-19",
          "tipo_secao":"pergunta",
          "obs":{},
          "perguntas": [
            {
              "id": 6,
              "desc_pergunta": "VOCÊ ESTÁ OU ESTEVE INTERNADO?",
              "tipo_imput_grop": "checkdet",
              "orden_apresentacao": 6,
              "component": "",
              "opc": [
                {
                  "id": 15,
                  "desc_opc": "Sim",
                  "type": "radio",
                  "name": "infectado",
                  "value": "13",
                  "placeholder": "",
                  "id_pergunta": 6
                },
                {
                  "id": 14,
                  "desc_opc": "Não",
                  "type": "radio",
                  "name": "infectado",
                  "value": "14",
                  "placeholder": "",
                  "id_pergunta": 6
                }
              ]
            },

            {
              "id": 7,
              "desc_pergunta": "EM QUAL PERÍODO?",
              "tipo_imput_grop": "aberta",
              "orden_apresentacao": 7,
              "component": "",
              "opc": [
                {
                  "id": 15,
                  "desc_opc": "",
                  "type": "date",
                  "name": "dataDainfeccao",
                  "value": "",
                  "placeholder": "",
                  "id_pergunta": 7
                }
              ]
            },

            {
              "id": 8,
              "desc_pergunta": "TEVE ALGUN SINTOMA",
              "tipo_imput_grop": "checkdet",
              "orden_apresentacao": 8,
              "component": "",
              "opc": [
                {
                  "id": 16,
                  "desc_opc": "Sim",
                  "type": "radio",
                  "name": "sintomas",
                  "value": "16",
                  "placeholder": "",
                  "id_pergunta": 8
                },
                {
                  "id": 17,
                  "desc_opc": "Não",
                  "type": "radio",
                  "name": "sintomas",
                  "value": "17",
                  "placeholder": "",
                  "id_pergunta": 8
                }
              ]
            },

            {
              "id": 9,
              "desc_pergunta": "QUAL A DATA DE INÍCIO DO SEU PRIMEIRO SINTOMA? ",
              "tipo_imput_grop": "aberta",
              "orden_apresentacao": 4,
              "component": "",
              "opc": [
                {
                  "id": 18,
                  "desc_opc": "",
                  "type": "date",
                  "name": "datadosSintomas",
                  "value": "",
                  "placeholder": "",
                  "id_pergunta": 9
                }
              ]
            },

            {
              "id": 10,
              "desc_pergunta": "VOCÊ MORA SOZINHO?",
              "tipo_imput_grop": "checkdet",
              "orden_apresentacao": 5,
              "component": "",
              "opc": [
                {
                  "id": 19,
                  "desc_opc": "Sim",
                  "type": "radio",
                  "name": "moraSozinho",
                  "value": "19",
                  "placeholder": "",
                  "id_pergunta": 10
                },
                {
                  "id": 20,
                  "desc_opc": "Não",
                  "type": "radio",
                  "name": "moraSozinho",
                  "value": "20",
                  "placeholder": "",
                  "id_pergunta": 10
                }
              ]
            },

            {
              "id": 11,
              "desc_pergunta": " QUANTAS PESSOAS MORAM COM VOCÊ?",
              "tipo_imput_grop": "aberta",
              "orden_apresentacao": 11,
              "component": "",
              "opc": [
                {
                  "id": 21,
                  "desc_opc": "",
                  "type": "number",
                  "name": "qtdPessoasMoraComVoce",
                  "value": "",
                  "placeholder": "",
                  "id_pergunta": 11
                }
              ]
            },

            {
              "id": 12,
              "desc_pergunta": "VOCÊ FEZ ISOLAMENTO EM CASA (FICOU SOZINHO EM QUARTO SEPARADO E DEMAIS RECOMENDAÇÕES)?",
              "tipo_imput_grop": "checkdet",
              "orden_apresentacao": 12,
              "component": "",
              "opc": [
                {
                  "id": 22,
                  "desc_opc": "Sim",
                  "type": "radio",
                  "name": "fezIsolamento",
                  "value": "22",
                  "placeholder": "",
                  "id_pergunta": 12
                },
                {
                  "id": 23,
                  "desc_opc": "Não",
                  "type": "radio",
                  "name": "fezIsolamento",
                  "value": "23",
                  "placeholder": "",
                  "id_pergunta": 12
                }
              ]
            },

            {
              "id": 13,
              "desc_pergunta": "A PARTIR DE QUAL DATA?",
              "tipo_imput_grop": "aberta",
              "orden_apresentacao": 13,
              "component": "",
              "opc": [
                {
                  "id": 24,
                  "desc_opc": "",
                  "type": "date",
                  "name": "dataDoIsolamento",
                  "value": "",
                  "placeholder": "",
                  "id_pergunta": 13
                }
              ]
            }
          ]
        },

        {
          "id":3,
          "tituloDaSecao": "SOBRE A COVID-19",
          "descricaoDaSecao": "SOBRE A COVID-19",
          "tipo_secao":"info",
          "perguntas": [],
          "obs":
            {
              "icone":warningIcon,
              "texto_obs":"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos"
          }
        },

        {
          "id":4,
          "tituloDaSecao": "COMUNICANTE DOMICILIAR",
          "descricaoDaSecao": "CADASTRO COMUNICANTE DOMICILIAR",
          "tipo_secao":"arrayDePerguntas",
          "nome_lista_de_resposta": "listaDeComunicantesD",
          "obs":{},
          "perguntas": [
            {
              "id": 14,
              "desc_pergunta": "Nome",
              "tipo_imput_grop": "aberta",
              "orden_apresentacao": 14,
              "component": "",
              "opc": [
                {
                  "id": 26,
                  "desc_opc": "",
                  "type": "text",
                  "name": "nomeContactante",
                  "value": "",
                  "placeholder": "",
                  "id_pergunta": 14
                }
              ]
            },

            {
              "id": 15,
              "desc_pergunta": "Telefone",
              "tipo_imput_grop": "aberta",
              "orden_apresentacao": 15,
              "component": "",
              "opc": [
                {
                  "id": 27,
                  "desc_opc": "",
                  "type": "text",
                  "name": "telefoneContactante",
                  "value": "",
                  "placeholder": "",
                  "id_pergunta": 15
                }
              ]
            }
          ]
        },

        {
          "id":5,
          "tituloDaSecao": "CONTATOS EXTERNOS",
          "descricaoDaSecao": "CONTATOS EXTERNOS",
          "tipo_secao":"pergunta",
          "nome_lista_de_resposta": "",
          "obs":{},
          "perguntas": [
            {
              "id": 16,
              "desc_pergunta": "EM QUANTOS LUGARES VOCÊ ESTIMA QUE PASSOU NESTE PERÍODO?",
              "tipo_imput_grop": "aberta",
              "orden_apresentacao": 16,
              "component": "",
              "opc": [
                {
                  "id": 28,
                  "desc_opc": "",
                  "type": "number",
                  "name": "qtdLugaresPassou",
                  "value": "",
                  "placeholder": "",
                  "id_pergunta": 16
                }
              ]
            },

            {
              "id": 17,
              "desc_pergunta": "COM QUANTAS PESSOAS VOCÊ ESTIMA QUE TEVE CONTATO EM TODO ESTE PERÍODO?",
              "tipo_imput_grop": "aberta",
              "orden_apresentacao": 17,
              "component": "",
              "opc": [
                {
                  "id": 29,
                  "desc_opc": "",
                  "type": "number",
                  "name": "qtdPessoasPassou",
                  "value": "",
                  "placeholder": "",
                  "id_pergunta": 17
                }
              ]
            }
          ]
        },
        
        {
          "id":6,
          "tituloDaSecao": "COMUNICANTE EXTERNOS",
          "descricaoDaSecao": "CADASTRO COMUNICANTE EXTERNOS",
          "tipo_secao":"arrayDePerguntas",
          "nome_lista_de_resposta": "listaDeComunicantesE",
          "obs":{},
          "perguntas": [
            {
              "id": 18,
              "desc_pergunta": "Data do contato ",
              "tipo_imput_grop": "aberta",
              "orden_apresentacao": 18,
              "component": "",
              "opc": [
                {
                  "id": 30,
                  "desc_opc": "",
                  "type": "date",
                  "name": "dataDoContato",
                  "value": "",
                  "placeholder": "",
                  "id_pergunta": 18
                }
              ]
            },

            {
              "id": 19,
              "desc_pergunta": "Local do contato",
              "tipo_imput_grop": "checkdet",
              "orden_apresentacao": 19,
              "component": "",
              "opc": [
                {
                  "id": 31,
                  "desc_opc": "Trabalho",
                  "type": "radio",
                  "name": "localdocontato",
                  "value": "31",
                  "placeholder": "",
                  "id_pergunta": 19
                },
                {
                  "id": 32,
                  "desc_opc": "Em casa",
                  "type": "radio",
                  "name": "localdocontato",
                  "value": "32",
                  "placeholder": "",
                  "id_pergunta": 19
                },
                {
                  "id": 33,
                  "desc_opc": "Igreja",
                  "type": "radio",
                  "name": "localdocontato",
                  "value": "33",
                  "placeholder": "",
                  "id_pergunta": 19
                },
                {
                  "id": 34,
                  "desc_opc": "Outro",
                  "type": "radio",
                  "name": "localdocontato",
                  "value": "34",
                  "placeholder": "",
                  "id_pergunta": 19
                }
              ]
            },
            {
              "id": 20,
              "desc_pergunta": "Cep do endereco de contato",
              "tipo_imput_grop": "aberta",
              "orden_apresentacao": 20,
              "component": "",
              "opc": [
                {
                  "id": 35,
                  "desc_opc": "",
                  "type": "text",
                  "name": "cepcontatoexterno",
                  "value": "",
                  "placeholder": "",
                  "id_pergunta": 20
                }
              ]
            },
            
            {
              "id": 21,
              "desc_pergunta": "Nome",
              "tipo_imput_grop": "aberta",
              "orden_apresentacao": 21,
              "component": "",
              "opc": [
                {
                  "id": 36,
                  "desc_opc": "",
                  "type": "text",
                  "name": "nomeContactante",
                  "value": "",
                  "placeholder": "",
                  "id_pergunta": 21
                }
              ]
            },

            {
              "id": 22,
              "desc_pergunta": "Telefone",
              "tipo_imput_grop": "aberta",
              "orden_apresentacao": 22,
              "component": "",
              "opc": [
                {
                  "id": 37,
                  "desc_opc": "",
                  "type": "text",
                  "name": "telefoneContactante",
                  "value": "",
                  "placeholder": "",
                  "id_pergunta": 22
                }
              ]
            }
          ]
        },
        
        {
          "id": 7,
          "tituloDaSecao": "SEÇÃO FINAL",
          "descricaoDaSecao": "SEÇÃO FINAL",
          "tipo_secao":"pergunta",
          "nome_lista_de_resposta": "",
          "obs":{},
          "perguntas": [
            {
              "id": 23,
              "desc_pergunta": "Declaro que recebi informações da Diretoria de Vigilância em Saúde de Florianópolis sobre a situação de Emergência em Saúde Pública de Importância Nacional, em decorrência da infecção humana pelo coronavírus (SARS-CoV-2). Fui informado que sou um caso positivo da doença COVID-19, conforme resultado detectado em exame. Declaro ainda que estou ciente da necessidade de adoção da medida sanitária de isolamento, visando à prevenção da dispersão do vírus, pelo prazo indicado na mensagem enviada pelo whattszapp. Por fim, tenho ciência que devo acatar as determinações das autoridades sanitárias, conforme expressamente disposto nos Arts. 91, 92, 94 e 99, da Lei Complementar Municipal n. 239/06, c/c Lei Federal 13.979/2020 e que a recusa é considerada infração de natureza sanitária, sujeitando o subscritor às penalidades cabíveis. Estou ciente que o período de isolamento pode ser aumentado, de acordo com a avaliação da equipe de saúde",
              "tipo_imput_grop": "checkdet",
              "orden_apresentacao": 23,
              "component": "",
              "opc": [
                {
                  "id": 38,
                  "desc_opc": "Sim, ciente da necessidade de isolamento domiciliar pelo prazo indicado na mensagem enviada pelo whattszapp",
                  "type": "radio",
                  "name": "checkfinal",
                  "value": "38",
                  "placeholder": "",
                  "id_pergunta": 23
                },
                {
                  "id": 39,
                  "desc_opc": "Não foi solicitado eu fazer isolamento domiciliar na mensagem pelo whattszapp (passou o prazo).",
                  "type": "radio",
                  "name": "checkfinal",
                  "value": "39",
                  "placeholder": "",
                  "id_pergunta": 23
                },
                {
                  "id": 40,
                  "desc_opc": "Fui orientado a fazer isolamento em outro período pela equipe de saúde e estou ciente da necessidade em fazê-lo.",
                  "type": "radio",
                  "name": "checkfinal",
                  "value": "40",
                  "placeholder": "",
                  "id_pergunta": 23
                }
              ]
            }
          ]
        }
      ]
    } 
  }


  return (
    <div id="page-teacher-form" className="container">
    <PageHeader 
        title={forme.forme.titulo_forme || ""} 
        description= {forme.forme.desc_forme  || ""}/>
        
        <main>
            <Forme 
              initialValues={initialValues}
              forme={forme.forme}
            >
              <footer>
                <button className="btn_enviar" type="submit">Enviar Formulario</button>
                <p>
                  Agradecemos muito ter chegado ate aqui muito obrigado!!!
                </p>
              </footer>
              
            </Forme>
        </main>
    </div> 
  
  );
}

export default TypeFormes;
