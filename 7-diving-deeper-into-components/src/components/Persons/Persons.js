import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          onClick={() => this.props.onClick(index)}
          key={person.id}
          onChange={event => this.props.onChange(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
