import React from 'react';
import './FormikContainer.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../components/FormikComponents/FormikControl/FormikControl';

const FormikContainer = (props) => {

    const dropdownOptions = [
        { key: 'Select a car', value: '' },
        { key: 'Volvo', value: '01' },
        { key: 'Mercedes', value: '02' },
        { key: 'Audi', value: '03' },
        { key: 'Toyota', value: '04' },
        { key: 'Jeep', value: '05' },
        { key: 'Saab', value: '06' }
    ]

    const radioOptions = [
        { key: 'mail', value: '01' },
        { key: 'phone', value: '02' },
        { key: 'email', value: '03' }
    ]

    const checkBoxOptions = [
        { key: 'mail report', value: '011' },
        { key: 'fax report', value: '021' },
        { key: 'email report', value: '031' }
    ]

    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkBoxOption: [],
        birthDate: null
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid Email Format')
            .required('Email is required'),
        description: Yup.string()
            .max(500, `Comments field is maximum 500 characters long`)
            .required('Description is required'),
        selectOption: Yup.string()
            .required('Select an option'),
        radioOption: Yup.string()
            .required('Select an option'),
        checkBoxOption: Yup.array()
            .required('Select a method to receive the report'),
        birthDate: Yup.date()
            .required('Pick a Date')
            .nullable()
    });

    const onSubmit = (values) => {
        // console.log('marina')
        // console.log(values)
    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}

            validateOnChange={true}
            validateOnBlur={true}
            validateOnMount={true}
        >{

                formik => <Form >
                    <FormikControl control='input' type='email' label='Email' name='email' />

                    <FormikControl control='textarea' type='text' label='Description' name='description' />

                    <FormikControl control='select' type='text' label='Select an Option' name='selectOption'
                        options={dropdownOptions} />

                    <FormikControl
                        control='radio'
                        label='Select a Contact Option'
                        name='radioOption'
                        options={radioOptions}
                    />

                    <FormikControl
                        control='checkbox'
                        label='Select a Report Option'
                        name='checkBoxOption'
                        options={checkBoxOptions}
                    />

                    <FormikControl
                        control='date'
                        label='Pick a Birth Date'
                        name='birthDate'
                    />

                    <div className='divValidation'>
                        <button type='submit' className='buttonValidation'>Submit</button>
                    </div>

                </Form>
            }

        </Formik>
    )
}

export default FormikContainer;