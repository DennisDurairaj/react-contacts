import React from "react";
import Button from '@material-ui/core/Button';
import Form from './Form';

const styles = {
  button: {
    width: '100%'
  }
};

const ToggleableAddForm = () => {
  return (
    <div>
      <Button color="primary" style={styles.button}>Add Contact</Button>
      <Form/>
    </div>
  );
};

export default ToggleableAddForm;
