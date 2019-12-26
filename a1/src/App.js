import React, { Component } from 'react'
import  './App.css';
import Input from './Input/Input'
import Output from './Output/Output'

export default class App extends Component {

  state = {
    name: 'Marina'
  }

  NameDisplayhandler =(event) =>{
    this.setState({
      name : event.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <Input changed={this.NameDisplayhandler} originalName={this.state.name}/> 
      <Output name='Anna' />

      <Output name={this.state.name} />
    </div>
    )
  }
}

