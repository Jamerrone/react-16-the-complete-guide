import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "James", age: "25" },
      { name: "Jessica", age: "22" },
      { name: "Serge", age: "47" }
    ],
    showPersons: false
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: "25" },
        { name: "Jessica", age: "22" },
        { name: "Serge", age: "47" }
      ]
    });
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
    const style = {
      backgroundColor: "white",
      border: "1px solid blue",
      cursor: "pointer",
      font: "inherit",
      padding: ".5em"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                onClick={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* The bind method on line 40 is the preferred method. */}
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
