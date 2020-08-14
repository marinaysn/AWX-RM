import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import './YoutubeForm.css';
import TextError from '../TextError';

const initialValues = {
  name: 'Marina',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: ''
  },
  phoneNumbers: ['', ''],
  phNumbers: ['']
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
  comments: Yup.string().max(
    500,
    `Comments field is maximum 500 characters long`
  ),
});

const YoutubeForm = (props) => {
  //   console.log('Visited:', formik.touched);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field type='text' id='name' name='name' />
          <ErrorMessage name='name' component={TextError} />
        </div>

        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage className='errorsMsg' name='email' component='div' />
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field type='text' id='channel' name='channel' />
          <ErrorMessage name='channel'>
            {
              (errorMsg) => (<div className='error'>{errorMsg}</div>)
            }
          </ErrorMessage>
        </div>

        <div className='form-control'>
          <label htmlFor='comments'>Comments</label>
          <Field as='textarea' type='text' id='comments' name='comments' />
          <ErrorMessage className='errorsMsg' name='comments' component='div' />
        </div>

        <div className='form-control'>
          <label htmlFor='address'>Address</label>
          <Field name='address'>
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <input type='text' id='address' {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
          <ErrorMessage className='errorsMsg' name='address' component='div' />
        </div>

        <div className='form-control'>
          <label htmlFor='facebook'>FaceBook Profile</label>
          <Field type='text' id='facebook' name='social.facebook' />
        </div>

        <div className='form-control'>
          <label htmlFor='twitter'>Twitter Profile</label>
          <Field type='text' id='twitter' name='social.twitter' />
        </div>

        <div className='form-control'>
          <label htmlFor='phonePrimary'>Phone Primary</label>
          <Field type='text' id='phonePrimary' name='phoneNumbers[0]' />
        </div>

        <div className='form-control'>
          <label htmlFor='phoneSecondary'>Phone Secondary</label>
          <Field type='text' id='phoneSecondary' name='phoneNumbers[1]' />
        </div>

        <div className='form-control'>
          <label htmlFor='phNumbers'>List of Phone Numbers</label>
          <FieldArray name='phNumbers'>{
            (fieldArrayProps) => {
              {/* console.log(fieldArrayProps) */ }

              const { push, remove, form } = fieldArrayProps;
              const { values } = form
              const { phNumbers } = values


              return <div>{
                phNumbers.map((num, index) => (
                  <div key={index}>
                    <Field name={`phNumbers[${index}]`} />
                  { index > 0 && <button type='button' onClick={() =>remove(index)}> - </button>
                  }
                    <button type='button' onClick={() =>push('')}> + </button>
                  </div>
                ))
              }</div>
            }

          }
          </FieldArray>
        </div>


        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
