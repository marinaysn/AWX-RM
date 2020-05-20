import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, NavLink } from "react-router-dom"
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
                            activeStyle={{color:"red"}} >Home</NavLink> </li>
                            <li><NavLink to={{
                                pathname: '/newpost',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} exact>New Posts</NavLink> </li>
                        </ul>
                    </nav>

                </header>

                
                {/* <Route path="/" exact render={() => <Posts />} />
                <Route path="/newpost" exact render={() => <NewPost />} /> */}

                <Route path="/" exact component={Posts} />
                <Route path="/newpost" exact component={NewPost} />
                <Route path="/:id" exact component={FullPost} />
                
                {/* <section>
                    <FullPost id={this.state.currentPostID} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;