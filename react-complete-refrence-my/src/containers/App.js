import React, { Component } from 'react';
import './App.css';
import PersonList from '../components/PersonList/PersonList'
import Cockpit from '../components/Cockpit/Cockpit'

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
    const temp = [...this.state.persons]
    temp.splice(index, 1)
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
          <PersonList
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
        </div>);
    }

    return (

      <div className="App">
        <Cockpit 
        clicked={this.togglePersonHandler}
        showPerson={this.state.showPerson}
        personArrLength={this.state.persons.length}
        />

        {persons}

      </div>

    );
  }
}

export default App;
