import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from "react-router-dom";
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';



class Blog extends Component {


    render() {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" 
                            exact
                            activeClassName="myactive"
                            activeStyle={{color:"red"}} >Posts</NavLink> </li>
                            <li><NavLink to={{
                                pathname: '/newpost',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} exact>New Posts</NavLink> </li>
                        </ul>
                    </nav>

                </header>

                <Switch>
                    
                    <Route path="/newpost" component={NewPost} />

                    <Route path="/" component={Posts} /> 
                    {/* <Route path="/:id" exact component={FullPost} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;