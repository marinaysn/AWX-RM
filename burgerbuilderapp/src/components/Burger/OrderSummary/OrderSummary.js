import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxilary/Auxiliary';
import './OrderSummary';
import Button from '../../UI/Button/Button';

export class OrderSummary extends Component {

    shouldComponentUpdate(nextProps, nextState){
        console.log('0. OrderSummary - will update');
        return true;
    }
    componentDidUpdate(){
        console.log('1. OrderSummary - will update');
    }


  render() {

    console.log('3. OrderSummary - Updated');
    const redDiv = (
      <div className='redText'>
        <strong>Total: ${this.props.price.toFixed(2)}</strong>
      </div>
    );

    const ingredientsSummary = Object.keys(this.props.ingredients).map(i => {
      if (this.props.ingredients[i] > 0) {
        return (
          <li key={i}>
            <span className='capitalized'>{i}</span> : {this.props.ingredients[i]}
          </li>
        );
      }
    });

    return (
      <Auxiliary>
        <h3>Your Order Summary</h3>
        {redDiv}
        <p>Ingredients you've ordered: </p>
        <ul>{ingredientsSummary}</ul>
        <p>Continue to Checkout?</p>
        <Button click={this.props.modalClosed} btnType='Danger'>
          Cancel
        </Button>
        <Button click={this.props.modalContinue} btnType='Success'>
          Continue
        </Button>
      </Auxiliary>
    );
  }
}

export default OrderSummary;
