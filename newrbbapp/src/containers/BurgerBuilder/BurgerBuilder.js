import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxilary/Auxiliary';
import Burger from '../../components/Burger/Burger';

const INGREDIENTPRICES = {
    salad: 0.5,
    bacon: 0.9,
    cheese: 1,
    meat: 1.5
  };
  
  export class BurgerBuilder extends Component {
    state = {
      // ingredients: null,
      ingredients: {
        salad: 1,
      cheese: 1},
      totalPrice: 4.0,
      isAnyitemsSelected: false,
      orderIsClicked: false,
      loading: false,
      error: false
    };

    render() {
        return (
            <Auxiliary>

              <div>
                <Burger ingBurger={this.state.ingredients}  price={this.state.totalPrice} /> 
              </div>  
              <div>
                  Build Controls
              </div> 
            </Auxiliary>
        )
    }
}

export default BurgerBuilder
