import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
  name: 'Marina',
  email: '',
  channel: '',
};

const onSubmit = (value) => {
  console.log(value);
};

const validate = (value) => {
  const error = {};

  if (!value.name) {
    error.name = 'Requred';
  }

  if (!value.email) {
    error.email = 'Requred';
  } else if (!/^[A-Z0-9._%+_]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
    error.email = 'Invalid email format';
  }

  if (!value.channel) {
    error.channel = 'Requred';
  }

  return error;
};

const YoutubeForm = (props) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log('Visited:', formik.touched);


  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        id='name'
        name='name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name
         }
      />
      {formik.touched.name && formik.errors.name ?<div style={{'color': 'red', 'textTransform': 'capitalize'}}>{Object.keys(formik.initialValues)[0]} is {formik.errors.name}</div>: null}

      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        name='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />

{formik.touched.email && formik.errors.email ? <div style={{'color': 'red', 'textTransform': 'capitalize'}}> {formik.errors.email}</div>: null}


      <label htmlFor='channel'>Channel</label>
      <input
        type='text'
        id='channel'
        name='channel'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.channel}
      />
      {formik.touched.channel && formik.errors.channel ?<div style={{'color': 'red', 'textTransform': 'capitalize'}}>{Object.keys(formik.initialValues)[2]} is {formik.errors.channel}</div>: null}

      <button type='submit'>Submit</button>
    </form>
  );
};

export default YoutubeForm;
