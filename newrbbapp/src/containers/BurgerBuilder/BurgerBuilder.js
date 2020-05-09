import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxilary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
// import Modal from '../../components/UI/Modal/Modal';
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
// import axios from 'axios-orders';
// import Spinner from '../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

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
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4.0,
    isAnyitemsSelected: false,
    orderIsClicked: false,
    loading: false,
    error: false
  };

  render() {
    return (
      <Auxiliary>


        <Burger ingBurger={this.state.ingredients} price={this.state.totalPrice} />

        <BuildControls
          // addItem={this.addIngredientHandler}
          // removeItem={this.removeIngredientHandler}
          // disabled={disabledInfo}
          // disabledOrderBtn={this.state.isAnyitemsSelected}
          // orderBtnClicked={this.orderButtonClickedHandler}
        />
      </Auxiliary>
    )
  }
}

export default BurgerBuilder
