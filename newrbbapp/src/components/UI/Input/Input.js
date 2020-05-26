import React from 'react';
import './Input.css'
const Input = (props) => {



    let inputElement = null;
    let inputClassesTemp = ['InputElement'];
    let inputClasses = '';
    let LabelMsg = props.name.charAt(0).toUpperCase() + props.name.slice(1);
    let labelCSS = 'Label'

    if(props.invalid && props.shouldValidate && props.valueWasEntered) {
        inputClassesTemp.push('Invalid');
        LabelMsg = LabelMsg+ ': Please enter valid ' + LabelMsg;
        labelCSS = labelCSS + ' InvalidLabel'
    }

    inputClasses = inputClassesTemp.join(' ')


    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className= {inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.onChange}
            />
            break;
        case ('textarea'):
            inputElement = <textarea 
                className= {inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.onChange} />
            break;
        case ('select'):
            inputElement = (
                <select
                    onChange={props.onChange}
                    className= {inputClasses}
                    value={props.value}>
                    {props.elementConfig.options.map(o => (
                        <option key={o.value} value={o.value}>{o.displayValue}</option>
                    ))}
                </select>)
            break;
        default:
            inputElement = <input
                className= {inputClasses}
                onChange={props.onChange}
                {...props.elementConfig}
                value={props.value} />
    }


    return (
        <div className='Input'>
            <label className={labelCSS}>{LabelMsg}</label>
            {inputElement}
        </div>
    )
}

export default Input;