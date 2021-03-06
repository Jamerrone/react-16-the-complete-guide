import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className="Person">
      <p onClick={props.onClick}>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.onChange} />
    </div>
  );
};

export default Person;
