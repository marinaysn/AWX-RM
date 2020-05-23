import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';


class Checkout extends Component {
    state ={
        ingredients: [],
        totalPrice: 0
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
    
        for (let i of query.entries()){
            ingredients[i[0]] = +i[1]
        }

        // this.setState({ ingredients: this.props.location.ingredients, totalPrice: this.props.location.price });
        this.setState({ ingredients: ingredients, totalPrice: this.props.location.price });
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
