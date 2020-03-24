import React, { Component } from 'react';
import axios from '../../../axios';
import './NewPost.css';
import {Redirect} from 'react-router-dom';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Marina',
    submitted: false
  };

  componentDidMount() {
    console.log('###############');
    console.log(this.props);
  }

  postDataHandler = () => {
    const post = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author
    };
    axios.post('/posts', post).then(responce => {
      console.log(responce);
      this.setState({submitted: true})
    });
  };

  render() {

    let redirect = null;

    if (this.state.submitted){
      redirect = <Redirect to='/posts' />
    }
    return (
      <div className='NewPost'>
         {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type='text'
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows='4'
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value='Max'>Marina</option>
          <option value='Manu'>Pavel</option>
          <option value='Manu'>Alexey</option>
          <option value='Manu'>Anna</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
