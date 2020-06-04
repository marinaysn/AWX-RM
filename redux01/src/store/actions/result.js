import * as actionTypes from './actionTypes';


export const storeResult = (resultParam, totParam) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: resultParam,
        total: totParam
    }
}

export const saveResult = (num) => {
    return {
        type: actionTypes.SUB_COUNTER, value: num
    }
}



export const deleteResult = (id, resultParam, storedParamArray, totParam) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElementID: id,
        result: resultParam,
        storedResult: storedParamArray,
        total: totParam
    }
}
