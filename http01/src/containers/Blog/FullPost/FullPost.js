import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../../axios';
import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
    id: null
  };

  componentDidMount(prevProps, prevState, snapshot) {
    console.log('1111111111111');
   console.log(this.props.match.params.postid);
    console.log(this.props);

    this.setState({id: this.props.match.params.postid})
    
    const postId = this.props.match.params.postid;

    if (postId) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && postId !== this.state.loadedPost.id)
      ) {
        axios.get('/posts/' + postId ).then(responce => {
          this.setState({ loadedPost: responce.data });
        });
      }
    }
  }

  deletePostHandler = () => {
    
    axios.delete('/posts/' + this.id).then(responce => {
      // console.log(responce);
    });
  };

  render() {
    console.log('22222222222222222');
    console.log(this.id);
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

    if (this.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className='FullPost'>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className='Edit'>
            <button className='Delete' onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
