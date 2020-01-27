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
            <button onClick={props.modalClosed} >Cancel</button>
            <button onClick={props.modalClosed} >Continue</button>

        </Auxiliary>
    )
};

export default OrderSummary
