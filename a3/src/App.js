import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello/Hello';
import CardList from './components/CardList/CardList';
import Form from './components/Form/Form';

export class App extends Component {
  state = {
    profiles: ''
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

const testData = [
  {
    name: 'Dan Abramov',
    avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4',
    company: '@facebook'
  },
  {
    name: 'Sophie Alpert',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4',
    company: 'Humu'
  },
  {
    name: 'Sebastian Markbåge',
    avatar_url: 'https://avatars2.githubusercontent.com/u/63648?v=4',
    company: 'Facebook'
  },
  {
    name: 'Marina Ysnogorodsky',
    avatar_url: 'https://avatars3.githubusercontent.com/u/23560634?s=460&v=4',
    company: 'BlueLink'
  }
];
