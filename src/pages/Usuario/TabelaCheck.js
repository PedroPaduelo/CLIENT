import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListSubheader from '@material-ui/core/ListSubheader';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function DataTable({dados, checked, setChecked}) {
  const classes = useStyles();
  
  const handleToggle = (id_servicos, id_app) => () => {

    const item = id_servicos + "-" + id_app
    const currentIndex = checked.indexOf(item);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };


  return (
    <div style={{ height: 290 , width: '100%'  }}>

    <List className={classes.root} subheader={<li />}>
      {dados.map((item) => (
        <li key={`section-${item.id_app}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{item.apptitle}</ListSubheader>
            {item.rotas.map((items) => {

              const labelId = `checkbox-list-label-${items.id_servicos}`;
              return (
                <ListItem key={items.id_servicos} dense={true} role={undefined} button onClick={handleToggle(items.id_servicos, item.id_app)}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      color="primary"
                      checked={checked.indexOf( items.id_servicos + "-" + item.id_app ) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={items.name} />
                </ListItem>
              )
            })}
          </ul>
        </li>
      ))}
    </List>
    </div>
  );
}
