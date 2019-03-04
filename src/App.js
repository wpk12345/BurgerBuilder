import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

import "./App.css";

class App extends Component {
  state = {
    persons: [{ name: "Manu", age: 34 }, { name: "Bill", age: 43 }],
    isPerson: true
  };

  changedNameHandler = e => {
    e.preventDefault();
    this.setState({
      persons: [
        { name: e.target.value, age: 34 },
        { name: e.target.value, age: 43 }
      ]
    });
  };

  togglePersonHandler = () => {
    const showPerson = this.state.isPerson;
    this.setState({
      isPerson: !showPerson
    });
  };
  render() {
    let showPersons = null;

    if (this.state.isPerson) {
      showPersons = (
        <div>
          <h1>Hi, I'm a React App</h1>

          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            onChange={this.changedNameHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            onChange={this.changedNameHandler}
          />
        </div>
      );
    }
    return (
      <div>
        <div className="App">
          <button className="bill" onClick={this.togglePersonHandler}>
            Toggle to View Content
          </button>
          {showPersons}
        </div>
      </div>
    );
  }
}

export default App;
