import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

import api from '../../../../services/api';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const [rows, srows] = useState([]);


  useEffect(() => {

    async function getItems() {
      try {
        const { data } = await api.get(`/disparosWahts`);
        srows(data);
      } catch (error) {
        alert("Ocorreu um erro ao buscar os items");
      }
    }
    getItems();
  },[]);


  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Lista Pacientes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Sexo</TableCell>
            <TableCell>Data de Nascimento</TableCell>
            <TableCell>Celular</TableCell>
            <TableCell>Cep</TableCell>
            <TableCell>Tipo do Teste</TableCell>
            <TableCell>Resultado</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>


          {rows.map((row , i) => (
            <TableRow key={i}>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.sexo}</TableCell>
              <TableCell>{row.data_de_nascimento}</TableCell>
              <TableCell>{row.celular}</TableCell>
              <TableCell>{row.cep}</TableCell>
              <TableCell>{row.tipoTeste}</TableCell>
              <TableCell>{row.resultadoDoTeste}</TableCell>
              <TableCell align="right">{row.status_do_paciente}</TableCell>
            </TableRow>
          ))}


        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}