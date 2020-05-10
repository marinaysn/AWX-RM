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
  salad: 0.75,
  bacon: 1.25,
  cheese: 1,
  meat: 2.5
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

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;

    const originalPrice = this.state.totalPrice;
    const updatedPrice = originalPrice + INGREDIENTPRICES[type];

    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients
    });
    this.updateTotalItemsState(updatedIngredients);
  };

  updateTotalItemsState(tempIngArr) {
    const sum = Object.keys(tempIngArr)
      .map(i => {
        return tempIngArr[i];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({
      isAnyitemsSelected: sum > 0
    });
  }

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];

    if (oldCount > 0) {
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      let updatedPrice = 0;

      updatedIngredients[type] = updatedCount;

      const originalPrice = this.state.totalPrice;
      updatedPrice = originalPrice - INGREDIENTPRICES[type];

      this.setState({
        totalPrice: updatedPrice,
        ingredients: updatedIngredients
      });

      this.updateTotalItemsState(updatedIngredients);
    }
  };

  orderButtonClickedHandler = () => {
    this.setState({
      orderIsClicked: true
    });
  };

  orderCancelledHandler = () => {
    this.setState({
      orderIsClicked: false
    });
  };

  orderContinuedHandler = () => {
    // alert('you clicked Continue');

    this.setState({
      orderIsClicked: false,
      loading: true
    });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Marina Ysn',
        address: {
          street: '123 Test St',
          zipCode: '12345',
          country: 'Canada'
        },
        email: 'marina@test.ca'
      },
      deliveryMethod: 'UPS Standard'
    };

    // axios
    //   .post('/orders.json', order)
    //   .then(responce => {
    //     this.setState({
    //       orderIsClicked: false,
    //       loading: false
    //     });
    //   })
    //   .catch(error => {


    //     this.setState({
    //       orderIsClicked: false,
    //       loading: false
    //     });
    //   });
  };

  render() {

    //disable Less Button if user didn't order this ingredient
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <Auxiliary>


        <Burger ingBurger={this.state.ingredients} price={this.state.totalPrice} />

        <BuildControls
          addItem={this.addIngredientHandler}
          removeItem={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          disabledOrderBtn={this.state.isAnyitemsSelected}
          // orderBtnClicked={this.orderButtonClickedHandler}
        />
      </Auxiliary>
    )
  }
}

export default BurgerBuilder
