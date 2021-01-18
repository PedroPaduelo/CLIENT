import React, { useState , useEffect } from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import api from '../../../services/api';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function Row({row}) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>

        <TableCell component="th" scope="row">
          {row.firstname} {row.lastname}
        </TableCell>
        <TableCell align="right">{row.celular}</TableCell>
        <TableCell align="right">{row.resultadodoteste}</TableCell>
        <TableCell align="right">{row.localdoteste}</TableCell>
        <TableCell align="right">{row.status_do_paciente}</TableCell>
        <TableCell align="right">{row.cod_acesso}</TableCell>
        <TableCell>
          <Link to={`/FormePacienteIndex/${row.id}/${row.cod_acesso}`}>
            <Button
              variant="outlined"
              color="primary"
            >
              <SearchOutlinedIcon/>
            </Button>
          </Link>
        </TableCell>
      </TableRow>
      
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Comunicantes
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>Telefone</TableCell>
                    
                    <TableCell align="right">Tipo do Comunicante</TableCell>
                    <TableCell align="right">Local do Contato</TableCell>

                    <TableCell align="right">Ultima atualização</TableCell>

                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.comunicante.map((comunicanteRow) => (
                    <TableRow key={comunicanteRow.id}>
                      <TableCell component="th" scope="row">{comunicanteRow.communicatingname}</TableCell>
                      <TableCell>{comunicanteRow.communicatingcelular}</TableCell>
                      <TableCell align="right">{comunicanteRow.communicatingtipo}</TableCell>
                      <TableCell align="right">{comunicanteRow.communicatinglocaldocontato}</TableCell>
                      <TableCell align="right">{comunicanteRow.updated_at}</TableCell>
                      <TableCell align="right">
                        <Link to={`/FormePacienteIndex/${row.id}`}>
                          <Button
                            variant="outlined"
                            color="primary"
                          >
                            <SearchOutlinedIcon/>
                          </Button>
                        </Link>
                      </TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const [rows, srows] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {

    async function getComunicantes(){
      const {data} = await api.get(`/paciente`);
      srows(data)
    } 
      getComunicantes()
      setOpen(true)
  }, []);


  return (
    open &&
    <TableContainer component={Paper}>
      <Table size="small" aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Id</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Telefone Celular</TableCell>
            <TableCell align="right">Resultrado do Teste</TableCell>
            <TableCell align="right">Local do teste</TableCell>
            <TableCell align="right">Status do Paciente</TableCell>
            <TableCell align="right">Codigo de Acesso</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
