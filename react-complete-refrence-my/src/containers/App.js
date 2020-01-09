import React, { Component } from 'react';
import './App.css';
import Person from '../components/PersonList/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons:
      [
        { id: 'aaa', name: 'Marina', age: 43 },
        { id: 'bbb', name: 'Pavel', age: 43 },
        { id: 'ccc', name: 'Alexey', age: 15 },
        { id: 'ddd', name: 'Anna', age: 13 }
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

  nameChangeHandler = (event, id) => {

    const index = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = { ...this.state.persons[index] }
    person.name = event.target.value

    const tempPersons = [...this.state.persons]
    tempPersons[index] = person

    this.setState({
      persons: tempPersons
    })

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({
      showPerson: !doesShow
    })
  }

  render() {


    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div >
          {this.state.persons.map((p, index) => {
            return <ErrorBoundary key={p.id}><Person
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event, p.id)}
              name={p.name}
              age={p.age}
              
            />
            </ErrorBoundary>
          })}

        </div>);



    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }


    return (

        <div className="App">
          <h1>Testing the App</h1>
          <p className={classes.join(' ')}>working...</p>

          <button
          className={this.state.showPerson? "buttonRed" : "buttonApp"}
          alt={this.state.showPerson}
            onClick={this.togglePersonHandler}>Show the Persons List
          </button>
          {persons}

        </div>

    );
  }
}

export default App;
