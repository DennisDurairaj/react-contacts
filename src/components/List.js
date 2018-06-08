import React from "react";
import EditableListItem from "./EditableListItem";

const List = props => {
  const listItems = props.contacts.map((contact, index) => {
    return <EditableListItem key={index} contact={contact} />;
  });

  return <div>{listItems}</div>;
};

export default List;
