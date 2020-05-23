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

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
    
        for (let i of query.entries()){
            ingredients[i[0]] = +i[1]
        }
        console.log('mar mar mar')
        console.log(ingredients);
        this.setState({ ingredients: ingredients });
    };

    onCheckoutCancelledHandler = () => {
        this.props.history.goBack()
    }
    
    onCheckoutContinuedHandler = () => {
        this.props.history.replace('/checkout/content-data')
    }


    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    price={this.state.totalPrice}
                    onCheckoutCancelled={this.onCheckoutCancelledHandler}
                    onCheckoutContinued={this.onCheckoutContinuedHandler}
                     />
            </div>
        )
    }
}

export default Checkout;
