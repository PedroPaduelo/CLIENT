import 
  React, 
{ 
  useContext
} from 'react';

import { 
  NavLink
} from "react-router-dom";

import clsx from 'clsx';

import {
  Drawer,
  List,
  Typography,
  Divider,
  IconButton,
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon
} from '@material-ui/core';


import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';



import { DashContext } from '../../Context/DashContext';



export default function NaveBar({rotas, user, classes}) {

  const { open, handleNaveBarClose } = useContext(DashContext);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  
    return (
      <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <Avatar className={classes.avatar}>
          M
        </Avatar>
        <Typography noWrap className={classes.userLogado}> {user.fistname} {user.lastname} </Typography>
        <IconButton onClick={handleNaveBarClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>


      <Divider />
      
        <List>
          {rotas.map((route, i) => (
            <NavLink  
            key={i}
            activeClassName={classes.naveLink} 
            isActive={(match, location) => {
              if (!match) {
                return false;
              }
              return 1;
            }}
            to={route.path}
            >
              <ListItem button
              selected={selectedIndex === i}
              onClick={(event) => handleListItemClick(event, i)}>
                  <ListItemIcon>
                    <Icon className={`${route.icone} ${classes.icone} ${classes.listItemIcon}`}></Icon>
                  </ListItemIcon>
                  <ListItemText primary={route.name}/>
              </ListItem>

            </NavLink >
          ))}
        </List>

      <Divider/>


      <List>
      </List>


    </Drawer>
    );
}