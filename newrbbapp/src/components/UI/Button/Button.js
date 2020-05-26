import React from 'react';
import  './Button.css'

const Button = (props) => {
    return (
        <button 
            disabled={props.disabled}
            // className = "Button {props.btnType}"
            className = {["Button", [props.btnType]].join(' ')}
            onClick={props.click}>
            {props.children}
        </button>
    )
}

export default Button;
