import * as actionTypes from './actionTypes';
import * as svResult from './result'

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const addCounter = (num) => {
    return {
        type: actionTypes.ADD_COUNTER, value: num
    }
}

export const subCounter = (num) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(svResult.saveResult(num))
        }, 2000)
    }
}
