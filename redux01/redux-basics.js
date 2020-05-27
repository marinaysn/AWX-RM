const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}
//Reducer

const rootReduser = (state = initialState, action) => {


    return state;
};
//Store

const store = createStore(rootReduser);
console.log('mar mar mar')
console.log(store.getState());
//Reducer



// Dispatching the Action

//Subscription