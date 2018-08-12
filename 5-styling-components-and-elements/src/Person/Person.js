import React from "react";
import Radium from "radium";
import "./Person.css";

const Person = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.onClick}>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.onChange} />
    </div>
  );
};

export default Radium(Person);
