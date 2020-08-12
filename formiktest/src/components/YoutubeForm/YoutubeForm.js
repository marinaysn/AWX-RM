import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './YoutubeForm.css'

const initialValues = {
  name: 'Marina',
  email: '',
  channel: '',
};

const onSubmit = (value) => {
  console.log(value);
};

const min = 5;

const validationSchema = Yup.object({
  name: Yup.string().required('Name is Required'),
  email: Yup.string()
    .email('Invalid Email Format')
    .required('Email is required'),
  channel: Yup.string()
    .required('Channel is Required')
    .min(5, `Channel field must be ${min} characters long`)
    .max(5, `Channel field must be ${min} characters long`),
});

const YoutubeForm = (props) => {
//   console.log('Visited:', formik.touched);

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      <Form >
        <label htmlFor='name'>Name</label>
        <Field
          type='text'
          id='name'
          name='name'
        />
        <ErrorMessage className=
        "errorsMsg" name='name' />

        <label htmlFor='email'>Email</label>
        <Field
          type='email'
          id='email'
          name='email'
        />

<ErrorMessage name='email' />

        <label htmlFor='channel'>Channel</label>
        <Field
          type='text'
          id='channel'
          name='channel'
        />
        <ErrorMessage name='channel' />

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
