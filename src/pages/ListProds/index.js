import React, {useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { ProductContext } from '../../Contexts/ProductContext';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable() {
  const classes = useStyles();
  const { handleListProd, listprod } = useContext(ProductContext)


    useEffect(() => {
        async function getItems() {
            try {
                await handleListProd()
            } catch (error) {
                alert("Ocorreu um erro ao buscar os items");
            }
        }
        getItems();
    }, [handleListProd]);




  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Preço</TableCell>
            <TableCell align="right">Link da pragina</TableCell>
            <TableCell align="right">Ir para pagina</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listprod.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="right">
                {row.produtcname}
              </TableCell>

              <TableCell align="right">
                {row.statusprodutc}
              </TableCell>

              <TableCell align="right">
                {row.price}
              </TableCell>

              <TableCell align="right">
                https://nommand.com.br/PageProd/{row.id}
              </TableCell>

              <TableCell align="right">
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
