import React from 'react';
import './LoginForm.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../FormikComponents/FormikControl/FormikControl';

const LoginForm = (props) => {

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email').required("Email is Required"),
        password: Yup.string().required('Please enter Password')
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

export default LoginForm;