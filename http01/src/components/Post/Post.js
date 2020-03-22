import React from 'react';
import { withRouter } from 'react-router-dom';

import './Post.css';

const post = props => {
  // console.log('22222222222222222222');
  //   console.log(props);
  return (
    <article className='Post' onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className='Info'>
        <div className='Author'>
          {props.userId} - {props.author}
        </div>
        <p className='Author'>{props.body}</p>
      </div>
    </article>
  );
};

export default withRouter(post);
