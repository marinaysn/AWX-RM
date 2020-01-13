import React, { Component } from 'react';
import './App.css';
import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';



class App extends Component {

  constructor(props) {
    super(props);
    console.log("App.js Constructor")
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
    showPerson: false,
    showCockpit: true,
    changeCounter: 0,
    auth: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js - getDerivedStateFromProps', props)
    return state;
  }

  componentDidMount() {
    console.log('App.js - componentDidMount');
  }

  componentDidUpdate() {
    console.log('App.js - componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(' App.js - shouldComponentUpdate');
    return true;
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

    this.setState((prevState, props) => {
      return {
        persons: tempPersons,
        changeCounter: prevState.changeCounter + 1
      }
    })

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({
      showPerson: !doesShow
    })
  }

  loginHandler = () => {
    this.setState({
      auth: true
    })
  }

  render() {

    console.log(' App.js - render method');
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div >
          <PersonList
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            isAuthenticated={this.state.auth} />
        </div>);
    }

    return (


      <WithClass classes='App'>
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit })
          }}> Remove Cockpit!!!
        </button>

        <AuthContext.Provider value={{
          authenticated: this.state.auth,
          login: this.loginHandler
        }}>

          {this.state.showCockpit ? (
            <Cockpit
              persons={this.state.persons}
              clicked={this.togglePersonHandler}
              showPerson={this.state.showPerson}
              personArrLength={this.state.persons.length}
              title={this.props.appTitle}
            />
          ) : null}

          {persons}

        </AuthContext.Provider>
      </WithClass>

    );
  }
}

export default App;
