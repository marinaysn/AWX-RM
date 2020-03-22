import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Posts from '../Posts/Posts';
import FullPost from './FullPost/FullPost';
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
                <NavLink
                  to='/'
                  exact
                  activeClassName='myactive'
                  activeStyle={{
                    color: 'green'
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/newpost',
                    hash: '#submit',
                    search: '?quicksubmit=true'
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path='/newpost' exact component={NewPost} />
          <Route path='/:postid' exact component={FullPost} />
          <Route path='/' exact component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
