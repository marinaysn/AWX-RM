import React, { Component } from 'react';

export class Form extends Component {
  userNameInput = React.createRef();

  SubmitHandler = event => {
    event.preventDefault();


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
            ref={this.userNameInput}
          />
          <button>Add Card</button>
        </form>
      </div>
    );
  }
}

export default Form;
