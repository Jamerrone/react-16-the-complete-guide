import React, { Component } from "react";
import PropTypes from "prop-types";
import WithClass from "../../../hoc/WithClass";
import Aux from "../../../hoc/Aux";
import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    console.log("[Person.js] Inside render()");
    return (
      <Aux>
        <p onClick={this.props.onClick}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={inp => {
            this.inputElement = inp;
          }}
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
