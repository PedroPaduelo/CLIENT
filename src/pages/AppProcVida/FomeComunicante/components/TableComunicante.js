import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    marginTop: "2rem"
  },
});


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
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.communicatingname}</TableCell>
              <TableCell>{row.communicatingcelular}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}