import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    total: 0,
    result: []
}

const countTotals = (tempArr) => {

    let cnt = 0

    for (let i in tempArr) {
        cnt = cnt + tempArr[i].value
    }
    return cnt;
}


const reducer = (state = initialState, action) => {

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
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({ id: state.counter + +new Date(), value: state.counter }), total: state.total + state.counter
            }
        case actionTypes.DELETE_RESULT:
            // const id=2;
            // const tempArr = [...state.result];
            // tempArr.result.splice(id, 1);

            const tempArr = state.result.filter(result => result.id !== action.resultElementID);
  
            return {
                ...state,
                result: tempArr,
                total: countTotals(tempArr)
            }

    }
    console.log('state')
    console.log(state)

    return state
}

export default reducer;