import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux'


const storeR = createStore(reducer);


ReactDOM.render(<Provider store={storeR}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
