import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="James" age="25" />
        <Person name="Jessica" age="22">
          My Hobbies: Racing
        </Person>
        <Person name="Serge" age="47" />
      </div>
    );
  }
}

export default App;
