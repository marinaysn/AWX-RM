import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, Link } from "react-router-dom"
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
                            <li><Link to="/">Home</Link> </li>
                            <li><Link to={{
                                pathname: '/newpost',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Posts</Link> </li>
                        </ul>
                    </nav>

                </header>

                
                {/* <Route path="/" exact render={() => <Posts />} />
                <Route path="/newpost" exact render={() => <NewPost />} /> */}

                <Route path="/" exact component={Posts} />
                <Route path="/newpost" exact component={NewPost} />
                
                
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