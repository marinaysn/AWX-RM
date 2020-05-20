import React, { Component } from 'react';
import Post from '../../../components/Post/Post'
import axios from '../../../axios';
import './Posts.css';
import { Route, Link } from "react-router-dom";
import FullPost from '../FullPost/FullPost';


export class Posts extends Component {

  state = {
    posts: [],
    currentPostID: null,
    error: false,
    errorMsg: ''
  }
  //use with Link
  // FullPostReviewHandler = async id => {

  //   await this.componentDidMount()
  //   this.setState({ currentPostID: id });
  // }

  FullPostReviewHandler = async id => {

    await this.componentDidMount()

    this.props.history.push({ pathname: '/postsmar/' + id })
  }


  componentDidMount() {

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


        return (
          // <Link to={'/postsmar/' + p.id} >


          <Post
            key={p.id}
            title={p.title}
            author={p.authors}
            clicked={() => this.FullPostReviewHandler(p.id)} />


          // </Link>
        )
      })
    }
    else {
      err = <p style={{ textAlign: 'center' }}>{this.state.errorMsg}</p>
    }
    console.log(this.props)

    return (
      <div>

        <section className="Posts">
          {tempPosts}
        </section>
        <section className="Posts">
          {err}
        </section>
        {/* with nested routes use url property for the dynamic path */}
        <Route path={this.props.match.url + '/:id'} component={FullPost} />
        {/* <Route path="/:id" exact component={FullPost} /> */}

      </div>
    )
  }
}

export default Posts
