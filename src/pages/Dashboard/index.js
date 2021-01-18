import React from 'react';

import { createMuiTheme , ThemeProvider} from '@material-ui/core/styles';

import Budget from './Budget';
import LatestProducts from './LatestProducts';
import TasksProgress from './TasksProgress';
import TotalCustomers from './TotalCustomers';
import TotalProfit from './TotalProfit';


const theme = createMuiTheme({
  typography: {
    htmlFontSize: 12,
  }
});

export default function Dashboard() {

  return (
    <ThemeProvider theme={theme}>
      <Budget/>
      <TasksProgress/>
      <TotalCustomers/>
      <TotalProfit/>
      <LatestProducts/>
    </ThemeProvider>
  );
}