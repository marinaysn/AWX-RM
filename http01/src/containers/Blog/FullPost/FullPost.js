import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../../axios';
import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidMount(prevProps, prevState, snapshot) {
    this.setState({ id: this.props.match.params.postid });

    this.loadData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.loadData();
  }

  loadData(){
    const postId = this.props.match.params.postid;

    if (postId) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && postId !== +this.state.loadedPost.id)
      ) {
        axios.get('/posts/' + postId).then(responce => {
          this.setState({ loadedPost: responce.data });
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete('/posts/' + this.props.match.params.postid).then(responce => {
    });
  };

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

    if (this.props.match.params.postid) {
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
