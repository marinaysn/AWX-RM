import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons:
      [
        {name: 'Marina', age: 43},
        {name: 'Pavel', age: 43},
        {name: 'Alexey', age: 15},
        {name: 'Anna', age: 13}
      ],
    otherState: 'test'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: 'Marina', age: 45},
        {name: 'Pavel', age: 43},
        {name: newName, age: 15},
        {name: 'Anna', age: 13}
      ]
    })
    console.log(this.state.otherState)
  }

  nameChangeHandler =(event) => {
    this.setState({
      persons: [
        {name: 'Marka', age: 45},
        {name: 'Pavel', age: 43},
        {name: event.target.value, age: 15},
        {name: 'Anna', age: 13}
      ]
    })

  }

  render() {

    const style ={
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
          onClick={() =>this.switchNameHandler('Alex')}>Switch Name</button>

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
      </div>
    );
  }
}

export default App;
