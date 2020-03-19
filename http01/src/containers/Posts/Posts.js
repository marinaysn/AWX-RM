import React, { Component } from 'react'
import Post from '../../components/Post/Post';
import axios from '../../axios';
import './Posts.css'
export class Posts extends Component {

  state = {
    posts: [],
    selectedPostId: null,
   // error: false
  };

  componentDidMount() {
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
        // console.log(responce);
      })
      .catch(err => {
        console.log(err);
       // this.setState({ error: true });
      });
  }


  displaySinglePostHandler = id => {
    this.setState({ selectedPostId: id });
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
          <Post
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
            author={post.author}
            clicked={() => this.displaySinglePostHandler(post.id)}
          />
        );
      });
   // }

    return (
      <div>
        <section className='Posts'>{posts}</section>
      </div>
    )
  }
}

export default Posts;

