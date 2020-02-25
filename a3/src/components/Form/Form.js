import React, { Component } from 'react';

export class Form extends Component {

  state = {
    userName: ''
  };


  SubmitHandler = event => {
    event.preventDefault();
    console.log(this.state.userName);

  };

  render() {
    return (
      <div>
        <form
          action=''
          style={{ margin: '15px' }}
          onSubmit={this.SubmitHandler}
        >
          <input
            type='text'
            placeholder='GitHub Username'
            required
            value={this.state.userName}
            onChange= {(event) => this.setState({ userName: event.target.value })}
          />
          <button>Add Card</button>
        </form>
      </div>
    );
  }
}

export default Form;
