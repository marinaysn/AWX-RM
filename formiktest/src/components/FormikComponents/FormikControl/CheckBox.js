import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../../TextError';

const CheckBox = (props) => {

    const { label, name, options, ...rest } = props  

    return (
        <div className='form-control controlInline'>
            <label htmlFor={name} className="labelCheck">{label}</label>
            <Field as="checkbox" name={name} {...rest} >
                {
                    ({ field }) => {

                        {/* console.log(field) */}

                        return options.map(o => {

                            return (
                                <React.Fragment key={o.key}>
                                    <input type="checkbox"
                                        id={o.value}
                                        {...field}
                                        value={o.value}
                                        checked={field.value.includes(o.value)} />

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

export default CheckBox;