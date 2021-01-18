import React, { useState , useEffect, useContext } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Title from './Title';
import ModalUpDateUser from './ModalUpDateUser';
import ModalCadUser from './ModalCadUser';

import api from '../../services/api';

import { Context } from '../../Context/AuthContext';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: "#fff",
    padding: theme.spacing(3),
    borderRadius: "1rem",
    webkitBoxShadow: "0px 2px 15px -1px rgba(97,97,97,1)",
    mozBoxShadow: "0px 2px 15px -1px rgba(97,97,97,1)",
    boxShadow: "0px 2px 15px -1px rgba(97,97,97,1)",
  },
}));

export default function Users() {

  const { user } = useContext(Context);
  const classes = useStyles();
  const [lodin, slodin] = useState(false);
  const [qtdUser, setqtdUser] = useState([]);



  useEffect(() => {

    async function getUsers() {
      try {
        const { data } = await api.get(`/ListUserOrg/${user.id_org}`);
        setqtdUser(data);
      } catch (error) {
      }
    }
    getUsers();
  },[user, lodin]);


  return (
        <React.Fragment>
          <main className={classes.layout}>
          <Grid container spacing={2}>

            <Grid item xs={12} sm={11}>
              <Title>Tablela de Usuários</Title>
            </Grid>

            <Grid item xs={12} sm={1}>
              <ModalCadUser slodin={slodin}  lodin={lodin}/>
            </Grid>

          </Grid>
          

          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Fisrt Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Perfil</TableCell>
                <TableCell align="center">Capacidade Atendimento</TableCell>
                <TableCell>Data de Modificação</TableCell>
                <TableCell align="center">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {qtdUser.map((row) => (
                <TableRow key={row.email}>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.fistname}</TableCell>
                  <TableCell>{row.lastname}</TableCell>
                  <TableCell>{row.descstatus}</TableCell>
                  <TableCell>{row.desctipouser}</TableCell>
                  <TableCell align="center">{row.capacidade}</TableCell>
                  <TableCell>{row.updated_at}</TableCell>
                  <TableCell align="center"> 
                    <ModalUpDateUser dados={row} slodin={slodin} lodin={lodin} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </main>
        </React.Fragment>
  );
}