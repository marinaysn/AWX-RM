import React, { Component } from 'react';
import './App.css';
import PersonList from '../components/PersonList/PersonList'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  constructor(props){
    super(props);
    console.log("1111 - App.js Constructor")
  }

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

  static getDerivedStateFromProps(props, state) {
    console.log('2222 - App.js - getDerivedStateFromProps', props)
    return state;
  }

  componentDidMount() {
    console.log('7777 - App.js - componentDidMount');
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

    console.log('3333 - App.js - render method');
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
          title={this.props.appTitle }
        />

        {persons}

      </div>

    );
  }
}

export default App;
