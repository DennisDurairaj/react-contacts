import React from "react";

const ListItem = props => (
  <div>
    <h3>{props.name}</h3>
    <p>{props.age}</p>
    <p>{props.gender}</p>
  </div>
);

export default ListItem;
