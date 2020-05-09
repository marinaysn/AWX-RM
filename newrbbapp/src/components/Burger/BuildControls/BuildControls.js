import React from 'react';
import BuildControl from "./BuildControl/BuildControl"
import './BuildControls.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const BuildControls =(props) =>{
    return (
        <div className="BuildControls">
            {
                controls.map ( i =>(
                    <BuildControl 
                    key={i.label} 
                    label={i.label}
                    added={() => props.addItem(i.type)}
                    removed={() => props.removeItem(i.type) }
                    disabled={props.disabled[i.type]}
                     />
                ))
            }

            <button 
                className="OrderButton" 
                disabled={!props.disabledOrderBtn}
                onClick={props.orderBtnClicked}
                >ORDER NOW</button>
        </div>
    )
}

export default BuildControls