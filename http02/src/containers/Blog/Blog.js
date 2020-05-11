import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

    state ={
        posts : []
    }

componentDidMount() {
    const postsTemp = [];
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(responce =>{

        this.setState({ posts: responce.data.splice(0,7) });

    })

}

    render () {

        console.log(this.state.posts)

        const tempPosts = this.state.posts.map( p =>{
            return <Post key={p.id} title={p.title} />
        })

        return (
            <div>
                <section className="Posts">
                    {tempPosts}
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