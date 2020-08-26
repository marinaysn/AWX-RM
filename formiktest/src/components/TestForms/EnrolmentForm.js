import React from 'react';
import './EnrolmentForm.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../FormikComponents/FormikControl/FormikControl';


const EnrolmentForm = (props) => {

    const initialValues = {
        email: '',
        password: '',
        bio: '',
        course: '',
        skillset: [],
        coursedate: null
    }

    const checkBoxOptions = [
        { key: 'HTML', value: '01html' },
        { key: 'CSS', value: '02css' },
        { key: 'JavaScript', value: '03js' }
    ]

    const dropdownOptions = [
        { key: 'Select a time', value: '' },
        { key: 'Morning', value: '01m' },
        { key: 'Afternoon', value: '02a' },
        { key: 'Evening', value: '02e' }
    ]

    const onSubmit = (values) => {
        console.log('marina')
        console.log(values)
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid Email Format')
            .required('Email is required'),
        bio: Yup.string()
            .max(500, `Comments field is maximum 500 characters long`)
            .required('Bio is required'),
        course: Yup.string()
            .required('Select an option'),
        skillset: Yup.array()
            .required('Select a method to receive the report'),
        coursedate: Yup.date()
            .required('Pick a Date')
            .nullable()
    });

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
                formik => <Form>
                    <FormikControl control='chakrainput' type='email' label='Email' name='email' />


                    <FormikControl control='chakratextarea' type='text' label='Biography' name='bio' />

                    <br />
                    <FormikControl control='select' type='text' label='Select an Option' name='course'
                        options={dropdownOptions} />
                        <br />

                    <FormikControl
                        control='checkbox'
                        label='Skillset'
                        name='skillset'
                        options={checkBoxOptions}
                    />
<br />
                    <FormikControl
                        control='date'
                        label='Course Date'
                        name='coursedate'
                    />

<br />
                    <div className='divValidation'>
                        <button type='submit' className='buttonValidation'
                            disabled={!(formik.isValid && formik.dirty)}>Submit</button>
                    </div>


                </Form>
            }

        </Formik>
    )
}

export default EnrolmentForm;