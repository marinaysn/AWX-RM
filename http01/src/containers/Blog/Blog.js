import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from '../Posts/Posts';

//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
const AnysncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});



class Blog extends Component {
  state = {
    auth: true
  };

  render() {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to='/posts/'
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
          {this.state.auth ? <Route path='/newpost' exact component={AnysncNewPost} /> : null }
          <Route path='/posts/' component={Posts} /> 
          {/* to catch all errors */}
          <Route render={() => <h1>404 - Page Not Found</h1>} />     
          {/* <Redirect from='/' to='/posts' /> */}

         
        </Switch>
      </div>
    );
  }
}

export default Blog;
