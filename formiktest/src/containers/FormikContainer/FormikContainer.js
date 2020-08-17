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

    const initialValues = {
        email: '',
        description: '',
        selectOption: ''
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
    });

    const onSubmit = (values) => {
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
        >{

                formik => <Form >
                    <FormikControl control='input' type='email' label='Email' name='email' />

                    <FormikControl control='textarea' type='text' label='Description' name='description' />

                    <FormikControl control='select' type='text' label='Select an Option' name='selectOption'
                    options={dropdownOptions} />

                    <div className='divValidation'>
                        <button type='submit' className='buttonValidation'>Submit</button>
                    </div>

                </Form>
            }

        </Formik>
    )
}

export default FormikContainer;