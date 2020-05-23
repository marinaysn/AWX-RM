import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import './Checkout.css'


class Checkout extends Component {
    state ={
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 1
        },

        totalPrice: 9.00
    }
    
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} price={this.state.totalPrice} />
            </div>
        )
    }
}

export default Checkout;
