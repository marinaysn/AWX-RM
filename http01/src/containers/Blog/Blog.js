import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom'

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
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to={{
                  pathname: '/newpost',
                  hash: '#submit',
                  search:'?quicksubmit=true'}}>New Post</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          
          <Route path="/newpost" component={NewPost} />
          <Route path="/" component={Posts} />
        </Switch>

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
