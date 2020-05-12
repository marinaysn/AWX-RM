import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request =>{
    console.log('1------------------')
    console.log(request)
    return request;
}, error =>{
    console.log('2------------------')
    console.log(error);
    return Promise.reject(error);
})

axios.interceptors.response.use(response =>{
    console.log('3------------------')
    console.log(response)
    return response;
}, error =>{
    console.log('4------------------')
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
