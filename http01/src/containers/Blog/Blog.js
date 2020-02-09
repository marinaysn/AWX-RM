import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(responce => {
      const allPosts = responce.data.slice(0, 7);
      const updatedPost = allPosts.map(p => {
        return {
          ...p,
          author: 'Marina'
        };
      });
      this.setState({ posts: updatedPost });
     // console.log(responce);
    });
  }

  displaySinglePostHandler = id => {

    this.setState({ selectedPostId: id });
  };

  render() {

    const posts = this.state.posts.map(post => {
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
    return (
       
      <div>
        <section className='Posts'>{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} 
            />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
