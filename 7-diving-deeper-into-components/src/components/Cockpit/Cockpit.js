import React from "react";
import classes from "./Cockpit.css";
import Aux from "../../hoc/Aux";

const Cockpit = props => {
  const assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(" ");
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <Aux>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.onClick}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Log In</button>
    </Aux>
  );
};

export default Cockpit;
