import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary';
import './OrderSummary';
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {

    const redDiv = <div className="redText" ><strong>Total: ${props.price.toFixed(2)}</strong></div>

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
            {redDiv}
            <p>Ingredients you've ordered: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button click={props.modalClosed} btnType="Danger">Cancel</Button>
            <Button click={props.modalContinue} btnType="Success" >Continue</Button>

        </Auxiliary>
    )
};

export default OrderSummary
