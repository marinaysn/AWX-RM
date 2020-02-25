import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello/Hello';
import CardList from './components/CardList/CardList';
import Form from './components/Form/Form';

export class App extends Component {
  state = {
    profiles: []
  };

  addNewCard = profileData => {
    console.log('App', profileData);

    // const tempProfiles = [...this.state.profiles];
    // tempProfiles.push(profileData )
    // this.setState({
    //   profiles: tempProfiles
    // });

    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    const cardListArray =
      this.state.profiles.length > 0 ? (
        <CardList profiles={this.state.profiles} />
      ) : (
        <p>Please Add New Card</p>
      );

    return (
      <div className='App'>
        <Hello />
        <div className='header'>{this.props.title}</div>
        <Form onSubmit={this.addNewCard} profArr={this.state.profiles} />
        {/* <CardList profiles={this.state.profiles} /> */}

        {cardListArray}
      </div>
    );
  }
}

export default App;
