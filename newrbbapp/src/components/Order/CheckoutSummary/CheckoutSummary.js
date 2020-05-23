import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const CheckoutSummary = (props) =>{
    return (
        <div className='CheckoutSummary'>

            <h1>Your Current Order Summary: </h1>
           <div style={{width: '100%', margin: 'auto'}}>    
           <Burger ingBurger={props.ingredients} price={props.price} />
           </div>

           {/* click={} */}
            <Button 
                btnType='Danger' 
                click={props.onCheckoutCancelled}>Cancel</Button>
            <Button 
                btnType='Success' 
                click={props.onCheckoutContinued}>Continue</Button>
        </div>
    )
}

export default CheckoutSummary ;