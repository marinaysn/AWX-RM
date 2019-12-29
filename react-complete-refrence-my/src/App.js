import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons:
      [
        { name: 'Marina', age: 43 },
        { name: 'Pavel', age: 43 },
        { name: 'Alexey', age: 15 },
        { name: 'Anna', age: 13 }
      ],
    otherState: 'test',
    showPerson : false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Marina', age: 45 },
        { name: 'Pavel', age: 43 },
        { name: newName, age: 15 },
        { name: 'Anna', age: 13 }
      ]
    })
    console.log(this.state.otherState)
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Marka', age: 45 },
        { name: 'Pavel', age: 43 },
        { name: event.target.value, age: 15 },
        { name: 'Anna', age: 13 }
      ]
    })

  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPerson
    this.setState({
      showPerson : !doesShow
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Testing the App</h1>
        <p>working...</p>

        <button
          style={style}
          onClick={ this.togglePersonHandler}>Show the Persons List</button>
        { this.state.showPerson ?
          <div >
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, "Aleshka")}
            changed={this.nameChangeHandler}>My hobby: Video Games</Person>
          <Person
            name={this.state.persons[3].name}
            age={this.state.persons[3].age} />

        </div> : null
        }

      </div>
    );
  }
}

export default App;
