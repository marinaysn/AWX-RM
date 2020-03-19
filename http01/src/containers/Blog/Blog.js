import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Posts from '../Posts/Posts';
// import FullPost from './FullPost/FullPost';
 import NewPost from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };


  render() {
    

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

        {/* <Route path="/" render={() => <h1>Home Page</h1> } />
        <Route path="/" exact render={() => < Posts /> } /> */}

        <Route path="/" exact component={Posts} />
        <Route path="/newpost" component={NewPost} />

        {/* <Posts /> */}
        {/* <section className='Posts'>{posts}</section> */}
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
