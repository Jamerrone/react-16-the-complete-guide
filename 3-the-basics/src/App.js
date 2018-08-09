import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "James", age: "25" },
      { name: "Jessica", age: "22" },
      { name: "Serge", age: "47" }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: "25" },
        { name: "Jessica Perrone", age: "22" },
        { name: "Serge Muelink", age: "47" }
      ]
    });
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

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* The bind method on line 40 is the preferred method. */}
        <button onClick={() => this.switchNameHandler("James Peter")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          onChange={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          onClick={this.switchNameHandler.bind(this, "James Perrone")}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
