import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';



class Blog extends Component {

state={
    auth: false
}


    render() {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/postsmar/" 
                            exact
                            activeClassName="myactive"
                            activeStyle={{color:"red"}} >Posts</NavLink> </li>

                            {this.state.auth ?<li><NavLink to={{
                                pathname: '/newpost',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} exact>New Posts</NavLink> </li> : null}
                            
                        </ul>
                    </nav>

                </header>

                <Switch>
                    { this.state.auth ? <Route path="/newpost" component={NewPost} /> : null }
                    {/* <Route path="/newpost" component={NewPost} /> */}

                    <Route path="/postsmar/" component={Posts} /> 
                            <Route render={() => 
                            <h1> 404 - Page Not Found</h1>
                            } />
                    {/* <Redirect from="/" to="/postsmar" /> */}

                </Switch>
            </div>
        );
    }
}

export default Blog;