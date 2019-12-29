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
    showPerson: false
  }

  deletePersonHandler = (index) => {
    //const temp = this.state.persons;
    // const temp = this.state.persons.slice();
    const temp = [...this.state.persons]
    console.log(temp)
    temp.splice(index, 1)
    console.log(temp)
    this.setState({
      persons: temp
    })
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

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({
      showPerson: !doesShow
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

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div >
          {this.state.persons.map((p, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={p.name}
              age={p.age}
            />
          })}


        </div>)
    }


    return (
      <div className="App">
        <h1>Testing the App</h1>
        <p>working...</p>

        <button
          style={style}
          onClick={this.togglePersonHandler}>Show the Persons List</button>
        {persons}

      </div>
    );
  }
}

export default App;
