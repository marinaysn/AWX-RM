import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENTPRICES = {
    salad: 0.5,
    bacon: 0.9,
    cheese: 1,
    meat: 1.5
}

export class BurgerBuilder extends Component {


    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4.00
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const originalPrice = this.state.totalPrice;
        const updatedPrice = originalPrice + INGREDIENTPRICES[type]

        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients
        })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        console.log(oldCount)
        if (oldCount > 0) {

            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
            let updatedPrice = 0;

            updatedIngredients[type] = updatedCount;

            const originalPrice = this.state.totalPrice;
            updatedPrice = originalPrice - INGREDIENTPRICES[type]



            this.setState({
                totalPrice: updatedPrice,
                ingredients: updatedIngredients
            })
        }

    }

    render() {

        const disabledInfo ={
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Auxiliary>
                
                <BuildControls
                    addItem={this.addIngredientHandler}
                    removeItem={this.removeIngredientHandler}
                    disabled={disabledInfo} />
                <Burger
                    ingBurger={this.state.ingredients}
                    price={this.state.totalPrice} />
                
            </Auxiliary>

        )
    }
}

export default BurgerBuilder
