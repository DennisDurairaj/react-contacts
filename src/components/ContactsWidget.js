import React from "react";
import List from "./List";
import contacts from "../contacts.json";
import ToggleableAddForm from "./ToggleableAddForm";

class ContactsWidget extends React.Component {
  state = {
    contacts: contacts
  }
  render() {
    return (
      <div container="true" justify="center" spacing={0}>
        <List contacts={this.state.contacts}/>
        <ToggleableAddForm/>
      </div>
    );
  }
}

export default ContactsWidget;
