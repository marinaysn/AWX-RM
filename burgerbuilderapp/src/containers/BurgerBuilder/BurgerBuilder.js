import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxilary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from 'axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

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

  componentDidMount() {
    axios
      .get('https://mareactburgerapp.firebaseio.com/ingredients.json')
      .then(res => {
        this.setState({ ingredients: res.data });
      })
      .catch( err =>{


        this.setState({error: true})
      })
      
  }

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

    axios
      .post('/orders.json', order)
      .then(responce => {
        this.setState({
          orderIsClicked: false,
          loading: false
        });
      })
      .catch(error => {


        this.setState({
          orderIsClicked: false,
          loading: false
        });
      });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null;

    let burger = this.state.error ? <p>Error: Ingredients can't be loaded</p> : <Spinner />

    if (this.state.ingredients) {
      burger = (
        <Auxiliary>
          <Burger
            ingBurger={this.state.ingredients}
            price={this.state.totalPrice}
          />
          <BuildControls
            addItem={this.addIngredientHandler}
            removeItem={this.removeIngredientHandler}
            disabled={disabledInfo}
            disabledOrderBtn={this.state.isAnyitemsSelected}
            orderBtnClicked={this.orderButtonClickedHandler}
          />
        </Auxiliary>
      )

      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          modalClosed={this.orderCancelledHandler}
          modalContinue={this.orderContinuedHandler}
          price={this.state.totalPrice}
        />
      )
    }

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <Auxiliary>
        <Modal
          show={this.state.orderIsClicked}
          modalClosed={this.orderCancelledHandler}
        >
          {orderSummary}
        </Modal>

        {burger}
      </Auxiliary>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios);
