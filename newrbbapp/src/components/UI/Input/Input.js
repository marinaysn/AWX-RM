import React from 'react';
import './Input.css'
const Input = (props) =>{

    let inputElement = null;
    switch (props.elementType) {
        case('input'):
                inputElement = <input       
                    className='InputElement' 
                    {...props.elementConfig} 
                    value={props.value}
                     />
            break;
        case('textarea'):
                inputElement = <textarea       className='InputElement' 
                {...props.elementConfig} 
                value={props.value} />
            break;
        case('select'):
            inputElement = (
                <select
                    className='InputElement'  
                    value={props.value}>
                    {props.elementConfig.options.map( o => (
                        <option key={o.value} value={o.value}>{o.displayValue}</option>
                    ))}
                </select>)
            break;
        default:
            inputElement = <input       
                className='InputElement' 
                {...props.elementConfig} 
                value={props.value} />
    }


    return (
        <div className='Input'>
           <label className='Label'>{props.placeholder}</label>
           {inputElement}
        </div>
    )
}

export default Input;