import React from 'react';

// YoutubeForm test
import YoutubeForm from './components/YoutubeForm/YoutubeForm';
import YoutubeFormArray from './components/YoutubeForm/YoutubeFormArray';
import YoutubeManualTrigger from './components/YoutubeForm/YoutubeManualTrigger';

//Formik Component Tests
import FormikContainer from './containers/FormikContainer/FormikContainer'



import './App.css';

function App() {
  return (
    <div className="App">
      <FormikContainer />
    </div>
  );
}

export default App;
