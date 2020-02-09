import React from 'react';

import './Post.css';

const post = props => (
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

export default post;
