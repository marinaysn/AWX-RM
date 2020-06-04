import * as actionTypes from '../actions/actionTypes';

const initialState = {
    result: []
}

const result = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({ id: action.result + +new Date(), value: action.result })
            }


        case actionTypes.DELETE_RESULT:

            const tempArr = action.storedResult.filter(result => result.id !== action.resultElementID);

            return {
                ...state,
                result: tempArr
            }

    }


    return state
}

export default result;