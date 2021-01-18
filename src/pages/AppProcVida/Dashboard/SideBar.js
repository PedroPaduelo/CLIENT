import 
  React, 
{ 
  useContext
} from 'react';

import clsx from 'clsx';

import {
  Typography,
  Icon,
  IconButton,
  AppBar,
  Toolbar,
  Badge,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { DashContext } from '../../../Context/DashContext';




export default function NaveBar({deslogar, nameApp, classes}) {

  const { handleNaveBarOpen, open } = useContext(DashContext);

    return (
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleNaveBarOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {nameApp}
          </Typography>

          <IconButton color="inherit" className={classes.iconButton}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon /> 
            </Badge>
          </IconButton>

          <IconButton color="inherit" onClick={deslogar} className={classes.iconButton}>
            <Icon  className="fas fa-sign-out-alt"> sign out  </Icon>
          </IconButton>
          
        </Toolbar>
      </AppBar>
    );
}