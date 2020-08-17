import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../../TextError';

const Input = (props) => {

    const { label, name, type, ...rest } = props
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} type={type} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input;