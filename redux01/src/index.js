import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import totalReducer from './store/reducers/total';

const RootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
    tot: totalReducer
});

const storeR = createStore(RootReducer);


ReactDOM.render(<Provider store={storeR}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
