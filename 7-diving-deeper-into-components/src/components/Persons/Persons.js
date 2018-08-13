import React from "react";
import Person from "./Person/Person";

const Persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        onClick={() => props.onClick(index)}
        key={person.id}
        onChange={event => props.onChange(event, person.id)}
      />
    );
  });

export default Persons;
