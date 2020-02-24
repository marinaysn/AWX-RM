import React, { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <div>
        <form action='' style={{margin: '15px'}} >
          <input type='text' placeholder="GitHub Username" />
          <button>Add Card</button>
        </form>
      </div>
    );
  }
}

export default Form;
