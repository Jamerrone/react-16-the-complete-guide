import React from "react";
import classes from "./Person.css";

const Person = props => {
  const rndNumber = Math.random();

  if (rndNumber > 0.7) {
    throw new Error("Something went wrong.");
  }

  return (
    <div className={classes.Person}>
      <p onClick={props.onClick}>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.onChange} />
    </div>
  );
};

export default Person;
