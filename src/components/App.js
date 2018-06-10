import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import ContactsWidget from "./ContactsWidget";
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <div>
      <CssBaseline/>
      <Grid container justify="center" spacing={0}>
        <ContactsWidget/>
      </Grid>
    </div>
  );
};

export default App;
