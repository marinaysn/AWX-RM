const initialState = {
    counter: 0
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter +1;
            return newState;

        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUB_COUNTER':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {

           }
    }

    return state
}

export default reducer;