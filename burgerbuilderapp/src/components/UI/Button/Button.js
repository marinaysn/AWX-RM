import React from 'react';
import classes from './Button.css'

const Button = (props) => {
    return (
        <button 
            // className = "Button {props.btnType}"
            className = {[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.click}>
            {props.children}
        </button>
    )
}

export default Button
