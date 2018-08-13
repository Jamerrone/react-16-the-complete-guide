import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import classes from "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: "001", name: "James", age: "25" },
      { id: "002", name: "Jessica", age: "22" },
      { id: "003", name: "Serge", age: "47" }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          onClick={this.deletePersonHandler}
          onChange={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          onClick={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
