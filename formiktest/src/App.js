import React from 'react';

// YoutubeForm test
import YoutubeForm from './components/YoutubeForm/YoutubeForm';
import YoutubeFormArray from './components/YoutubeForm/YoutubeFormArray';
import YoutubeManualTrigger from './components/YoutubeForm/YoutubeManualTrigger';

//Formik Component Tests
import FormikContainer from './containers/FormikContainer/FormikContainer'

//testing Forms with controls
import LoginForm from './components/TestForms/LoginForm'

import './App.css';

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
