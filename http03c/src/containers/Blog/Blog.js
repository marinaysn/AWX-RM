import React, { Component } from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state ={
        posts: [],
        authors: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('posts')
        .then(response =>{

            const tempPost = [];
        

            for (let i = 0; i < response.data.length; i+=9) {
            tempPost.push(response.data[i]);
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
        .catch(error =>{
            console.log('44444444')
            console.log(error);

            this.setState({ error: true });
        })

        
            axios.get('users')
        .then(response =>{
            return  this.setState({ authors:  response.data});
        }) 
    }

    postSelectedHandler = (id) =>{
        this.setState({ selectedPostId : id });
    }


    render () {

        let posts = <p style={{textAlign: "center"}}>Something went wrong</p>

        if (!this.state.error) {
        posts = this.state.posts.map( post =>{
           
            let temp = "";
            
            this.state.authors.map( a => {
                if (a.id === post.userId){
                    return temp = a.name
                   
                }
                return null;
                }
           )
            return <Post 
                        key={post.id} 
                        title={post.title} 
                        author={temp} 
                        date={post.date}
                        clicked={ ()=> this.postSelectedHandler(post.id)} />
        }
        )
    }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;