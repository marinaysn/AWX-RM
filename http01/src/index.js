import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authosization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  req => {
    // console.log(req);
    return req;
  },
  error => {
    console.log('1111111111111');
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  res => {
    console.log(res);
    return res;
  },
  error => {
    console.log('2222222222');
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
