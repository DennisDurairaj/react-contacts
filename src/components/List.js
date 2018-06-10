import React from "react";
import EditableListItem from "./EditableListItem";
import ListMUI from '@material-ui/core/List';

const List = props => {
  const listItems = props
    .contacts
    .map((contact, index) => {
      return <EditableListItem key={index} contact={contact}/>;
    });

  return <ListMUI className='center'>{listItems}</ListMUI>;
};

export default List;
