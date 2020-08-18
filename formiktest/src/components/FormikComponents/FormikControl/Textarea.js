import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../../TextError';

const Textarea = (props) => {
    const { label, name, type, ...rest } = props
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' type={type} id={name} name={name} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Textarea;