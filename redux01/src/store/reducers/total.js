import * as actionTypes from '../actions/actions';

const initialState = {
    total: 0
}

const countTotals = (tempArr) => {

    let cnt = 0

    for (let i in tempArr) {
        cnt = cnt + tempArr[i].value
    }
    return cnt;
}


const total = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.STORE_RESULT:

            return {
                ...state,
                total: countTotals(action.total) + action.result
            }


        case actionTypes.DELETE_RESULT:

            const tempArr = action.storedResult.filter(result => result.id !== action.resultElementID);

            let temp = countTotals(tempArr);
            return {
                ...state,
                total: temp
            }
    }

    return state
}

export default total;