import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    marginTop: "2rem"
  },
});

function createData(name, telefone) {
  return { name, telefone };
}

const rows = [
  createData('Frozen yoghurt', 159),
];

export default function BasicTable({rows}) {
  const classes = useStyles();

  return (
    
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Telefone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.communicatingname}>
              <TableCell>{row.communicatingname}</TableCell>
              <TableCell>{row.communicatingcelular}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}