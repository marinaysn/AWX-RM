import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxilary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

// REDUX
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions'

const INGREDIENTPRICES = {
  salad: 0.5,
  bacon: 0.9,
  cheese: 1,
  meat: 1.5
};

export class BurgerBuilder extends Component {
  state = {
    // ingredients: null,
    totalPrice: 4.0,
    isAnyitemsSelected: false,
    orderIsClicked: false,
    loading: false,
    error: false
  };

  componentDidMount() {

    // axios
    //   .get('https://marb2-af6dd.firebaseio.com/ingredients.json')
    //   .then(res => {
    //     this.setState({ ingredients: res.data });
    //   })
    //   .catch( err =>{
    //     this.setState({error: true})
    //   })
      
  }

  // addIngredientHandler = type => {
  //   const oldCount = this.state.ingredients[type];
  //   const updatedCount = oldCount + 1;
  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   };
  //   updatedIngredients[type] = updatedCount;

  //   const originalPrice = this.state.totalPrice;
  //   const updatedPrice = originalPrice + INGREDIENTPRICES[type];

  //   this.setState({
  //     totalPrice: updatedPrice,
  //     ingredients: updatedIngredients
  //   });
  //   this.updateTotalItemsState(updatedIngredients);
  // };

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

  // removeIngredientHandler = type => {
  //   const oldCount = this.state.ingredients[type];

  //   if (oldCount > 0) {
  //     const updatedCount = oldCount - 1;
  //     const updatedIngredients = {
  //       ...this.state.ingredients
  //     };
  //     let updatedPrice = 0;

  //     updatedIngredients[type] = updatedCount;

  //     const originalPrice = this.state.totalPrice;
  //     updatedPrice = originalPrice - INGREDIENTPRICES[type];

  //     this.setState({
  //       totalPrice: updatedPrice,
  //       ingredients: updatedIngredients
  //     });

  //     this.updateTotalItemsState(updatedIngredients);
  //   }
  // };

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
    
    const queryParams = [];

    for(let i in this.props.ingredientsArray) {
      // queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
      queryParams.push(i + '=' + this.props.ingredientsArray[i]);
    }

    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryParams.join('&'),
      price: this.state.totalPrice,
      ingredients: this.props.ingredientsArray
    });

    
  };

  render() {
    const disabledInfo = {
      ...this.props.ingredientsArray
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null;

    let burger = this.state.error ? <p>Error: Ingredients can't be loaded</p> : <Spinner />

    if (this.props.ingredientsArray) {

      burger = (
        <Auxiliary>
          <Burger
            ingBurger={this.props.ingredientsArray}
            price={this.state.totalPrice}
          />
          <BuildControls
            addItem={ this.props.onProductAdded}
            removeItem={this.props.onProductRemoved}
            disabled={disabledInfo}
            disabledOrderBtn={this.state.isAnyitemsSelected}
            orderBtnClicked={this.orderButtonClickedHandler}
            price={this.state.totalPrice}
          />
        </Auxiliary>
      )

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredientsArray}
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

 const mapStateToProps = (state) =>{
   return {
     ingredientsArray: state.ingredients,
     totPrice: state.totalPrice
   }
}

const mapDispatchtoProps = (dispatch) =>{

  return {
    onProductAdded: (ingredientName) => dispatch({
      type: actionTypes.ADD_INGREDIENT, ingredientName: ingredientName
    }),
    onProductRemoved: (ingredientName) => dispatch({
      type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingredientName
    })
  }

}


// export default withErrorHandler(BurgerBuilder, axios);
export default connect(mapStateToProps, mapDispatchtoProps)(BurgerBuilder);