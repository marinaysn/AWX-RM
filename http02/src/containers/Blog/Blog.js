import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

    state ={
        posts : [],
        currentPostID: null
    }

componentDidMount() {
    const postsTemp = [];
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(responce =>{
        const temp = responce.data.splice(0,4);
        const updatedPosts = temp.map( post =>{
            return {
                ...post,
                authors: "Marina"
            }
        })

        this.setState({ posts: updatedPosts });
    })
}


FullPostReviewHandler = async id =>{

    await this.componentDidMount()
    this.setState({ currentPostID:  id });  
}



    render () {

       

        const tempPosts = this.state.posts.map( p =>{
            return <Post 
                        key={p.id} 
                        title={p.title} 
                        author={p.authors} 
                        clicked={() => this.FullPostReviewHandler(p.id)} />
        })

        return (
            <div>
                <section className="Posts">
                    {tempPosts}
                </section>
                <section>
                    <FullPost id={this.state.currentPostID} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;