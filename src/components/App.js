import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import ContactsWidget from "./ContactsWidget";
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

const App = (props) => {
  const {classes} = props;
  return (
    <div>
      <CssBaseline/>
      <Grid container justify="center" spacing={0}>
        <Grid item xs={2}>
          <ContactsWidget/>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
