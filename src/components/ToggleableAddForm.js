import React from "react";
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    width: '100%'
  }
};

const ToggleableAddForm = () => {
  return <Button color="primary" style={styles.button}>Add Contact</Button>;
};

export default ToggleableAddForm;
