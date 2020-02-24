import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
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
        console.log('333333333333333');
        this.setState({ error: true });
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

    if (!this.state.error) {
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
    }

    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/newpost'>New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className='Posts'>
          {posts}
          </section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
