import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

componentDidMount() {
    const posts = [];
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(responce =>{
        console.log(responce);

        responce.data.map (p =>{
            posts.push(p);
        })
        
    })
    console.log('==========')
    // console.log(posts(0).userId);
    console.log(posts);
}

    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;