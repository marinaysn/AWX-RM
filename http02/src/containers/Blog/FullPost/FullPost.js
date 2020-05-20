import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.props.id) {

            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {

                axios.get('/posts/' + this.props.id).then(responce => {
                
                    this.setState({ loadedPost: responce.data });
                })
            }
        }
    }

    deletePostHandler  = () =>{

        if (this.props.id) {

            axios.delete('/posts/' + this.props.id).then(responce => {
                    console.log('2+++++++++++++++++++++')
                    console.log(responce)

                    this.setState({ loadedPost: null });

                    console.log('3+++++++++++++++++++++')
                    console.log(this.loadedPost)
                })
            }
        }
    

    render() {

        let post = <p style={{ textAlign: 'center' }}>Please select Post to see details</p>;

        if (this.props.id) {
            <p style={{ textAlign: 'center' }}>Loading...</p>;
        }

        if (this.state.loadedPost) {

            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;