import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../../TextError';

const Select =(props) =>{

    const {label, name, options, type, ...rest} = props
    return (
        <div className='form-control'>
           <label htmlFor={name}>{label}</label>
            <Field as="select" id={name} type={type} name={name} {...rest} >
            {
                options.map( o =>{
                    return (
                        <option key={o.value} value={o.value}>
                            {o.key}
                        </option>
                    )
                })
            }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Select ;