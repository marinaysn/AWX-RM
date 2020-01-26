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
        totalPrice: 4.00,
        totalItems: false
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

        const items = this.state.totalItems + 1
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients
        })
        this.updateTotalItemsState(updatedIngredients);
    }

    updateTotalItemsState (tempIngArr){
       
        const sum = Object.keys(tempIngArr).map(i =>
          {  return tempIngArr[i]})
          .reduce((sum, el)=>{
              return sum + el
          }, 0)

          this.setState({
              totalItems: sum > 0
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
                ingredients: updatedIngredients,
            })

            this.updateTotalItemsState(updatedIngredients);
        }

    }

    render() {
        let disabledOrderBtn = true
        const disabledInfo ={
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
       
        console.log("====================")
        console.log(this.state.totalItems)
        

        return (
            <Auxiliary>
                
                
                <Burger
                    ingBurger={this.state.ingredients}
                    price={this.state.totalPrice} />
                <BuildControls
                    addItem={this.addIngredientHandler}
                    removeItem={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    disabledOrderBtn={this.state.totalItems} />
            </Auxiliary>

        )
    }
}

export default BurgerBuilder
