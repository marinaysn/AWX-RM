import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxilary/Auxiliary';

const INGREDIENTPRICES = {
    salad: 0.5,
    bacon: 0.9,
    cheese: 1,
    meat: 1.5
  };
  
  export class BurgerBuilder extends Component {
    state = {
      ingredients: null,
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
                  Burger
              </div>  
              <div>
                  Build Controls
              </div> 
            </Auxiliary>
        )
    }
}

export default BurgerBuilder
