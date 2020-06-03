import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk'; 

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import totalReducer from './store/reducers/total';

const RootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
    tot: totalReducer
});


const logger = (store) =>{

    return  next => {
      return action =>{
        console.log('Middleware', action)
        const result = next(action);
        console.log('Middleware next state', store.getState())
        return result;
      }
    }
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeR = createStore(RootReducer, composeEnhancers(applyMiddleware(logger, thunk)));


ReactDOM.render(<Provider store={storeR}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
