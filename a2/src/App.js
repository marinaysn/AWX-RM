import React, { Component } from 'react';
import ValidationComponent from  './ValidiationComponent/ValidiationComponent'
import CharComponent from './CharComponent/CharComponent'

import './App.css';

class App extends Component {

  state = {
    messageText: ''
  }

  textChangeHandler = (event) => {

    if (event.target.value.length > 0){
      this.setState({
        messageText: event.target.value
      })
    }
    else{
      this.setState({
        messageText: ''
      })
    }

    }

    deleteCharHandler = (index) =>{
      console.log('a=============')
      console.log(index)
    }
  


  render() {
    //console.log(this.state.messageText.length)
    let charsDisplay = null;

    if (this.state.messageText.length > 4) {

    const tempArr = (this.state.messageText).split('')
  //  console.log(tempArr);
   
      charsDisplay = (
        <div>
          {tempArr.map( (p, index) =>{
            console.log(index)
            console.log(p)

            return <CharComponent 
            onClick={() => {this.deleteCharHandler(index)} }
            change={p}
            
            /> 
          })}
          
        </div>
        

      ) 
    }

    return (
      <div className="App">
        <h3>Enter any text</h3>
        <input type="text" onChange={(event) => this.textChangeHandler(event)} />
        <ValidationComponent msg={this.state.messageText} />
       {charsDisplay}
    <p> {this.state.messageText}</p>
      </div>
    );
  }
}

export default App;
