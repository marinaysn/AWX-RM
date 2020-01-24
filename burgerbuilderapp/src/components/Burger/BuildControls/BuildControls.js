import React from 'react';
import BuildControl from "./BuildControl/BuildControl"
import './BuildControls';

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
                    <BuildControl key={i.label} label={i.label} />
                ))
            }
        </div>
    )
}

export default BuildControls
