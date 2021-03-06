import React, { Component } from "react";
import PropTypes from "prop-types";
import WithClass from "../../../hoc/WithClass";
import Aux from "../../../hoc/Aux";
import classes from "./Person.css";
import { AuthContext } from "../../../containers/App";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log("[Person.js] Inside render()");
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => (auth ? <p>I'm authenticated!</p> : null)}
        </AuthContext.Consumer>
        <p onClick={this.props.onClick}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          value={this.props.name}
          onChange={this.props.onChange}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

export default WithClass(Person, classes.Person);
