import React from "react";
import List from "./List";
import Grid from '@material-ui/core/Grid';
import contacts from "../contacts.json";
import ToggleableAddForm from "./ToggleableAddForm";

const ContactsWidget = () => (
  <Grid container justify="center" spacing={0}>
    <List contacts={contacts}/>
    <ToggleableAddForm/>
  </Grid>

);

export default ContactsWidget;
