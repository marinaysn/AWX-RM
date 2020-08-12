import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
  channel: Yup.string().required('Channel is Required').min(5, `Channel field must be ${min} characters long`).max(5, `Channel field must be ${min} characters long`),
});

const YoutubeForm = (props) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  console.log('Visited:', formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        id='name'
        name='name'
        {...formik.getFieldProps('name')}
      />
      {formik.touched.name && formik.errors.name ? (
        <div style={{ color: 'red', textTransform: 'capitalize' }}>
          {formik.errors.name}
        </div>
      ) : null}

      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        name='email'
        {...formik.getFieldProps('email')}
      />

      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: 'red', textTransform: 'capitalize' }}>
          {' '}
          {formik.errors.email}
        </div>
      ) : null}

      <label htmlFor='channel'>Channel</label>
      <input
        type='text'
        id='channel'
        name='channel'
        {...formik.getFieldProps('channel')}
      />
      {formik.touched.channel && formik.errors.channel ? (
        <div style={{ color: 'red', textTransform: 'capitalize' }}>
          {formik.errors.channel}
        </div>
      ) : null}

      <button type='submit'>Submit</button>
    </form>
  );
};

export default YoutubeForm;
