import React from "react";
import List from "./List";
import contacts from "../contacts.json";
import ToggleableAddForm from "./ToggleableAddForm";

const ContactsWidget = () => (
  <div>
    <List contacts={contacts} />
    <ToggleableAddForm />
  </div>
);

export default ContactsWidget;
