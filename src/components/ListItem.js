import React from "react";
import ListItemMUI from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ListItem = props => (
  <ListItemMUI>
    <ListItemText primary={props.name} secondary={`${props.age}, ${props.gender}`}></ListItemText>
  </ListItemMUI>
);

export default ListItem;
