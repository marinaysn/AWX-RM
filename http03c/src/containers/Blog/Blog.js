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

            const tempPost = [];
        

            for (let i = 0; i < responce.data.length; i+=2) {
            tempPost.push(responce.data[i]);
          }

          const tempPosts = tempPost.map( p=> {
                return {
                    ...p,
                    date: '2020-07-30'
                    }
            }
          )

           return this.setState({ posts:  tempPosts});
        })

        axios.get('https://jsonplaceholder.cypress.io/users')
        .then(responce =>{
            return  this.setState({ authors:  responce.data});
        })
    }


    render () {

        const posts = this.state.posts.map( post =>{
           
            let temp = "";
            
            this.state.authors.map( a => {
                if (a.id === post.userId){
                    return temp = a.name
                   
                }
                return null;
                }
           )
            return <Post key={post.id} title={post.title} author={temp} date={post.date} />
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