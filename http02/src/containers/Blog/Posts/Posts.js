import React, { Component } from 'react';
import Post from '../../../components/Post/Post'
import axios from '../../../axios';
import './Posts.css';

export class Posts extends Component {

  state = {
    posts: [],
    currentPostID: null,
    error: false,
    errorMsg: ''
  }

  FullPostReviewHandler = async id => {

    await this.componentDidMount()
    this.setState({ currentPostID: id });
  }

  componentDidMount() {
    console.log('++++++++++++++')
    console.log(this.props)
    const postsTemp = [];

    axios.get('/posts')
      .then(responce => {
        const temp = responce.data.splice(0, 4);
        const updatedPosts = temp.map(post => {
          return {
            ...post,
            authors: "Marina"
          }
        })

        this.setState({ posts: updatedPosts });
      })
      .catch(err => {
        this.setState({ error: true, errorMsg: err.toString() });
      })

  }

  render() {

    let tempPosts = <p style={{ textAlign: 'center' }}>Something is wrong</p>

    let err = '';
    if (!this.state.error) {

      tempPosts = this.state.posts.map(p => {
        return <Post
          key={p.id}
          title={p.title}
          author={p.authors}
          clicked={() => this.FullPostReviewHandler(p.id)} />
      })
    }
    else {
      err = <p style={{ textAlign: 'center' }}>{this.state.errorMsg}</p>
    }

    return (
      <div>
        <section className="Posts">
          {tempPosts}
        </section>
        <section className="Posts">
          {err}
        </section>
      </div>
    )
  }
}

export default Posts
