import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import axios from '../../axios';
import './Posts.css';
import { Link } from 'react-router-dom';

export class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null
    // error: false
  };

  componentDidMount() {
    // console.log('***************');
    // console.log(this.props);
    axios
      .get('/posts')
      .then(responce => {
        const allPosts = responce.data.slice(0, 7);
        const updatedPost = allPosts.map(p => {
          return {
            ...p,
            author: 'Marina'
          };
        });
        this.setState({ posts: updatedPost });
      })
      .catch(err => {
        console.log(err);
        // this.setState({ error: true });
      });
  }

  displaySinglePostHandler = id => {
   // this.setState({ selectedPostId: id });

   this.props.history.push({pathname: '/' + id})
   //this.props.history.push('/' + id)
  };

  render() {
    let posts = (
      <p
        style={{
          textAlign: 'center',
          color: 'red',
          fontWeight: 'bold',
          backgroundColor: 'rgb(248, 241, 226)'
        }}
      >
        {' '}
        Something is wrong. Please check your input data
      </p>
    );

    // if (!this.state.error) {
    posts = this.state.posts.map(post => {
      return (
       // <Link to={'/' + post.id} key={post.id}>
          <Post
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
            author={post.author}
            {...this.props}
            clicked={() => this.displaySinglePostHandler(post.id)}
          />
      //  </Link>
      );
    });
    // }

    return (
      <div>
        <section className='Posts'>{posts}</section>
      </div>
    );
  }
}

export default Posts;
