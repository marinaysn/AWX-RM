import React, { Component } from 'react'
import './App.css';
import Hello from './components/Hello/Hello';
import CardList from './components/CardList/CardList'

export class App extends Component {

  render() {
    

    return (
      <div className="App">
        <Hello />
        <div className="header">{this.props.title}</div>
        <CardList />
      </div>
    )
  }
}

export default App;


// import React from 'react';
// import './App.css';
// import Hello from './components/Hello/Hello';


// function App() {
//   return (
//     <div className="App">
//       <Hello />
//     </div>
//   );
// }

// export default App;


