import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../../TextError';

const RadioButton = (props) => {

    const { label, name, options, ...rest } = props  

    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field as="radio" name={name} {...rest} >
                {
                    ({ field }) => {

                        console.log(field)

                        return options.map(o => {

                            return (
                                <React.Fragment key={o.key}>
                                    <input type="radio"
                                        id={o.value}
                                        {...field}
                                        value={o.value}
                                        checked={field.value === o.value} />

                                    <label htmlFor={o.value}>{o.key}</label>
                                </React.Fragment>
                            )
                        })

                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default RadioButton;