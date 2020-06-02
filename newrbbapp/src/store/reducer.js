import * as actionType from './actions';
import React from 'react';

const INGREDIENTPRICES = {
    salad: 0.5,
    bacon: 0.9,
    cheese: 1,
    meat: 1.5
  };

const InitialState = {
    // ingredients: [],
    ingredients: {
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0
    },
    totalPrice: 8.0
}

const reducer = (state = InitialState, action) => {

    switch (action.type) {

        case actionType.ADD_INGREDIENT:

            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENTPRICES[action.ingredientName]
            }

        case actionType.REMOVE_INGREDIENT:

            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENTPRICES[action.ingredientName]
            }

            defualt:
            return state;

    }

    return state;
}

export default reducer;