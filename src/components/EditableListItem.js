import React from "react";
import ListItem from "./ListItem";

const EditableListItem = props => (
  <ListItem
    name={props.contact.name}
    age={props.contact.age}
    gender={props.contact.gender}
  />
);

export default EditableListItem;
