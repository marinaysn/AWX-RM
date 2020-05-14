import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route } from "react-router-dom"
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
                            <li><a href="/">Home</a> </li>
                            <li><a href="/newpost">New Posts</a> </li>
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