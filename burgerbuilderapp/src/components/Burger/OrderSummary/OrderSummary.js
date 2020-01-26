import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary';
import './OrderSummary'

const OrderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients)
        .map(i => {
            if (props.ingredients[i] > 0) {
                return <li key={i}>
                    <span className="capitalized">
                        {i}
                    </span> : {props.ingredients[i]}
                </li>
            }
        });


    return (
        <Auxiliary>
            <h3>Your Order Summary</h3>
            <p>Ingredients you've ordered: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Auxiliary>
    )
};

export default OrderSummary
