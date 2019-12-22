import React from 'react';
import './App.css';
import Person from './Person/Person'


function App() {
  return (
    <div className="App">
      <h1>Testing the App</h1>
      <p>working...</p>

      <button>Switch Name</button>
      <Person name="Marina" age= "43" />
      <Person name="Pavel" age= "43" />
      <Person name="Alexey" age= "15">My hobby: Racing</Person>
      <Person name="Anna" age= "13"/>
    </div>
  );

}

export default App;
