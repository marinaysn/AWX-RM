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
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

export class BurgerBuilder extends Component {
  state = {
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

  updateTotalItemsState(tempIngArr) {
    const sum = Object.keys(tempIngArr)
      .map(i => {
        return tempIngArr[i];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return sum > 0

  }

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
    this.props.history.push('/checkout');
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
            price={this.props.totalPrice}
          />
          <BuildControls
            addItem={this.props.onProductAdded}
            removeItem={this.props.onProductRemoved}
            disabled={disabledInfo}
            disabledOrderBtn={this.updateTotalItemsState(this.props.ingredientsArray)}
            orderBtnClicked={this.orderButtonClickedHandler}
            price={this.props.totalPrice}
          />
        </Auxiliary>
      )

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredientsArray}
          modalClosed={this.orderCancelledHandler}
          modalContinue={this.orderContinuedHandler}
          price={this.props.totalPrice}
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

const mapStateToProps = (state) => {
  return {
    ingredientsArray: state.ingredients,
    totalPrice: state.totalPrice
  }
}

const mapDispatchToProps = (dispatch) => {

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
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));