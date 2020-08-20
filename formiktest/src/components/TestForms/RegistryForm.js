import React from 'react';
import './RegistryForm.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../FormikComponents/FormikControl/FormikControl';

const RegistryForm = (props) => {


    const initialValues = {
        email: '',
        password: '',
        confpassword: '',
        modeOfContact: '',
        phone: ''
    }

    const radioOptions = [
        { key: 'mail', value: '01email' },
        { key: 'password', value: '02password' }
    ]

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email').required("Email is Required"),
        password: Yup.string().required('Please enter Password'),
        confpassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Please confirm password'),
        modeOfContact: Yup.string().required('Required'),
        phone: Yup.string().when('modeOfContact', {
            is: '02password',
            then: Yup.string().required('Enter phone number')
        })
    })

    const onSubmit = values => {
        console.log(values)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}

            validateOnChange={true}
            validateOnBlur={true}
            validateOnMount={true}
        >
            {
                formik => {
                    return (
                        <Form>
                            <FormikControl control='input' type='email'
                                label='Email'
                                name='email' />

                            <FormikControl control='input' type='password' label='Password' name='password' />

                            <FormikControl control='input' type='password' label='Confirm Password' name='confpassword' />

                            <FormikControl
                                control='radio'
                                label='Mode of Contact'
                                name='modeOfContact'
                                options={radioOptions}
                            />

                            
                            <FormikControl control='input' type='text'
                                label='Phone'
                                name='phone' />

                            <div className='divValidation'>
                                <button type='submit' className='buttonValidation'
                                    disabled={!(formik.isValid && formik.dirty)}>Submit</button>
                            </div>

                        </Form>
                    )
                }


            }
        </Formik>
    )
}

export default RegistryForm;