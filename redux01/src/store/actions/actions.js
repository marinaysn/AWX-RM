export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_COUNTER = 'ADD_COUNTER';
export const SUB_COUNTER = 'SUB_COUNTER';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const addCounter = (num) => {
    return {
        type: ADD_COUNTER, value: num
    }
}

export const saveResult = (num) => {
    return {
        type: SUB_COUNTER, value: num
    }
}

export const subCounter = (num) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(num))
        }, 2000)
    }


}

export const storeResult = (resultParam, totParam) => {
    return {
        type: STORE_RESULT,
        result: resultParam,
        total: totParam
    }
}

export const deleteResult = (id, resultParam, storedParamArray, totParam) => {
    return {
        type: DELETE_RESULT,
        resultElementID: id,
        result: resultParam,
        storedResult: storedParamArray,
        total: totParam
    }
}

