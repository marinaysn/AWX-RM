import React from 'react';

// YoutubeForm test
import YoutubeForm from './components/YoutubeForm/YoutubeForm';
import YoutubeFormArray from './components/YoutubeForm/YoutubeFormArray';
import YoutubeManualTrigger from './components/YoutubeForm/YoutubeManualTrigger';

//Formik Component Tests
import FormikContainer from './containers/FormikContainer/FormikContainer'

//testing Forms with controls
import LoginForm from './components/TestForms/LoginForm'
import RegistryForm from './components/TestForms/RegistryForm';
import EnrolmentForm from './components/TestForms/EnrolmentForm'


import './App.css';

function App() {
  return (
    <div className="App">
      {/* <LoginForm />
      <RegistryForm /> */}
      <EnrolmentForm />
    </div>
  );
}

export default App;
