import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
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
} from '@material-ui/core';

import ListAltIcon from '@material-ui/icons/ListAlt';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


import { AuthContext } from '../../Contexts/AuthContext';
import { DashContext } from '../../Contexts/DashContext';
import { ProductContext } from '../../Contexts/ProductContext';


export default function NaveBar({classes}) {

  const { open, handleNaveBarClose } = useContext(DashContext);
  const { handleToggleProdGoBack } = useContext(ProductContext);

  const { user } = useContext(AuthContext);

  const [ selectedIndex, setSelectedIndex ] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    handleToggleProdGoBack()
  };

  const handleisActive = (match) => {
    if (!match) {
      return false;
    }
    return 1;
  };

  
    return (
      <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon_o}>

        <div className={classes.toolbarIcon}>
          <Avatar  src={user.photoprofile} />
          <Typography noWrap className={classes.userLogado}> 
            {user.fistname} {user.lastname}
          </Typography>
        </div>

        <IconButton onClick={handleNaveBarClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>


      <Divider />
      
        <List>
       

          <NavLink  
            activeClassName={classes.naveLink} 
            isActive={handleisActive}
            to="/Painel/CriarProdsVsPages" 
          >
            <ListItem button
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}>

              <ListItemIcon>
                <ListAltIcon className={classes.iconButton}/>
              </ListItemIcon>
              
              <Typography className={classes.marginTop} variant="button" display="block" gutterBottom>
                Produtos
              </Typography>
            
            </ListItem>
          </NavLink >



          <NavLink  
            activeClassName={classes.naveLink} 
            isActive={handleisActive}
            to="/Painel/Dash" 
          >
            <ListItem button
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}>

              <ListItemIcon>
                <ListAltIcon className={classes.iconButton}/>
              </ListItemIcon>
              
              <Typography className={classes.marginTop} variant="button" display="block" gutterBottom>
                Resultados
              </Typography>
            
            </ListItem>
          </NavLink >
        
        </List>

      <Divider/>

      <List>

      </List>
      
    </Drawer>
    );
}