import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Link from '@material-ui/core/Link';

import api from '../../services/api'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable() {
  const classes = useStyles();
  const [ listprod, slistprod ] = useState([]);


    useEffect(() => {
        async function getItems() {
            try {
                const { data } = await api.get(`/ListProdutos`);
                slistprod(data)
            } catch (error) {
                console.log(error)
            }
        }
        getItems();
    },[]);




  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nome</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Preço</TableCell>
            <TableCell align="left">Link da pragina</TableCell>
            <TableCell align="left">Ir para pagina</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listprod.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">
                {row.produtcname}
              </TableCell>

              <TableCell align="left">
                {row.statusprodutc}
              </TableCell>

              <TableCell align="left">
                {row.price}
              </TableCell>

              <TableCell align="left">
                    {row.linkpage}/{row.id}
              </TableCell>

              <TableCell align="left">
                    <Link href={`/${row.linkpage}/${row.id}`}>
                        Visualizar
                    </Link>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
