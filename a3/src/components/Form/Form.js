import React, { Component } from 'react';
import axios from 'axios';
export class Form extends Component {

  state = {
    userName: ''
  };


  SubmitHandler = async (event) => {
    event.preventDefault();
    const responce = await axios.get(`https://api.github.com/users/${this.state.userName}`)
    // console.log(this.state.userName);
    // console.log('----------------------------');
    // console.log(responce.data);

    return this.props.onSubmit(responce.data);
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
