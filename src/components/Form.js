import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    marginTop: '10px'
  }
};

class Form extends React.Component {
  state = {
    name: '',
    age: '',
    gender: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <form className="center-align" noValidate>
        <div>
          <FormControl>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" value={this.state.name} onChange={this.handleChange}/>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="age">Age</InputLabel>
            <Input id="age" value={this.state.age} onChange={this.handleChange}/>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Input id="gender" value={this.state.gender} onChange={this.handleChange}/>
          </FormControl>
        </div>

        <FormControl>
          <Button style={styles.button} type="submit" color="primary">Submit</Button>
        </FormControl>
      </form>
    )
  }
};

export default Form;
