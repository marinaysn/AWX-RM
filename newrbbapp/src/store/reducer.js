import * as actionType from './actions';
import React from 'react';

const InitialState = {
    // ingredients: [],
    ingredients: {
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0
    },
    totalPrice: 4.0
}

const reducer = (state = InitialState, action) => {

    switch (action.type) {

        case actionType.ADD_INGREDIENT:

            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                }
            }

        case actionType.REMOVE_INGREDIENT:

            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                }
            }

            defualt:
            return state;

    }

    return state;
}

export default reducer;