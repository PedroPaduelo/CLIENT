import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FindInPageIcon from '@material-ui/icons/FindInPage';

import Link from '@material-ui/core/Link';

import { ProductContext } from '../../Contexts/ProductContext';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 150,
  },
  tablemargin:{
      marginTop: "2rem"
  },

  colunasExit:{
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
  },

 
    
}));

export default function DenseTable() {
  const classes = useStyles();
  const { listprod } = useContext(ProductContext)

  return (
    <TableContainer component={Paper} className={classes.tablemargin}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left" >Nome</TableCell>
            <TableCell align="left" className={classes.colunasExit}>Status</TableCell>
            <TableCell align="left" className={classes.colunasExit}>Preço</TableCell>
            <TableCell align="left" className={classes.colunasExit}>Link da pragina</TableCell>
            <TableCell align="left" >Ir para pagina</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listprod.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left" >
                {row.produtcname}
              </TableCell>

              <TableCell align="left" className={classes.colunasExit}>
                {row.statusprodutc}
              </TableCell>

              <TableCell align="left" className={classes.colunasExit}>
                {row.price}
              </TableCell>

              <TableCell align="left" className={classes.colunasExit}>
                    {row.linkpage}/{row.id}
              </TableCell>

              <TableCell align="left" >
                    <Link href={`/${row.linkpage}/${row.id}`} >
                        <IconButton>
                            <FindInPageIcon/> 
                        </IconButton>
                    </Link>

                    <IconButton>
                       <EditIcon/> 
                    </IconButton>

                    <IconButton>
                        <DeleteForeverIcon/>
                    </IconButton>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
