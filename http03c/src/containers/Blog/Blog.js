import React, { Component } from 'react';
import axios from 'axios';


import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state ={
        posts: [],
        authors: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.cypress.io/posts')
        .then(responce =>{
            this.setState({ posts:  responce.data});
           // console.log(responce.data);
        })

        axios.get('https://jsonplaceholder.cypress.io/users')
        .then(responce =>{
            this.setState({ authors:  responce.data});
           // console.log(responce.data);
        })
    }


    render () {

        const posts = this.state.posts.map( post =>{
           
            let temp = this.state.authors.map( a => {
                if (a.id = post.userId){
                    return a.name
                }
                }
           )

            return <Post title={post.title} author={temp[post.userId]} />
        }
        )

        return (
            <div>
                <section className="Posts">
                    {posts}
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