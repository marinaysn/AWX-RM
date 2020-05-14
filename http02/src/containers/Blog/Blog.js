import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
// import axios from 'axios';
import axios from '../../axios';

class Blog extends Component {

    state ={
        posts : [],
        currentPostID: null,
        error: false,
        errorMsg: ''
    }

componentDidMount() {
    const postsTemp = [];
    
    axios.get('/posts')
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
    .catch(err =>{
        // console.log('------------------')
        // console.log(err);
        this.setState({ error: true, errorMsg: err.toString() });
    })
    
}


FullPostReviewHandler = async id =>{

    await this.componentDidMount()
    this.setState({ currentPostID:  id });  
}

    render () {

       let tempPosts = <p style={{textAlign: 'center'}}>Something is wrong</p>

       let err = '';
       if (!this.state.error){

           tempPosts = this.state.posts.map( p =>{
            return <Post 
                        key={p.id} 
                        title={p.title} 
                        author={p.authors} 
                        clicked={() => this.FullPostReviewHandler(p.id)} />
        })
       }
       else {
        err = <p style={{textAlign: 'center'}}>{this.state.errorMsg}</p>
       }
        

        return (
            <div className='Blog'>
    <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a> </li>
                    <li><a href="/newpost">New Poste</a> </li>
                </ul>
            </nav>

    </header>


                <section className="Posts">
                    {tempPosts}
                </section>
                <section className="Posts">
                    {err}
                </section>
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