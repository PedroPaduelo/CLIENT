import React from 'react';

import { createMuiTheme , ThemeProvider} from '@material-ui/core/styles';

import Budget from './Budget';
import Tabela from './Tabela';
import TasksProgress from './TasksProgress';
import TotalCustomers from './TotalCustomers';
import TotalProfit from './TotalProfit';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  }
});

const useStyles = makeStyles((theme) => ({
  grid:{
    flexWrap: "wrap",
    height:"1rem"
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid
          container
          direction="row"
          spacing={2}
          className={classes.grid}
      >
        <Grid item xs={12} sm={3}>
          <Budget />
        </Grid>
        
        <Grid item xs={12} sm={3}> 
          <TasksProgress/>
        </Grid>
        
        <Grid item xs={12} sm={3}>
          <TotalCustomers/>
        </Grid>
        
        <Grid item xs={12} sm={3}>
          <TotalProfit/>
        </Grid>

        <Grid item xs={12} sm={12}>
          <Tabela/>
        </Grid>
      </Grid>
      
    </ThemeProvider>
  );
}