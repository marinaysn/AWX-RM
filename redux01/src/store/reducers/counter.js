import * as actionTypes from '../actions';

const initialState = {
    counter: 0
}

const counter = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;

        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUB_COUNTER:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    return state
}

export default counter;