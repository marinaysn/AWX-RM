import React from 'react';
import './Order.css'
const Order =(props) =>{

    const temp = [];
    for (let i in props.ingredients){
        if (props.ingredients[i] > 0){
            temp.push(i.charAt(0).toUpperCase() + i.slice(1) + ' : (' + props.ingredients[i] + ') ')
        }
    }


    return (
        <div className='Order'>
        <h3>Order # {props.orderId} </h3>
           <p><u>Ingredients:</u> {temp} </p>
           {/* <p>Ingredients: Salad </p> */}
           <p><u>Price</u> CAN {props.price}</p>
        </div>
    )
}

export default Order ;