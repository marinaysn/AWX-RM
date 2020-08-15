import React from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
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

const validateComments = (value) => {
  let error = '';

  if (!value) {
    error = 'Required!'
  }

  return error;
}

const validateCommentsHandle = (formikProps, fieldToValidate) => {

  if (fieldToValidate) {
    formikProps.validateField(fieldToValidate)
    formikProps.setFieldTouched(fieldToValidate)
  }
  else {
    formikProps.validateForm();
    formikProps.setTouched({
      name: true,
      channel: true,
      email: true,
      comments: true
    })
  }

}

const YoutubeForm = (props) => {
  //   console.log('Visited:', formik.touched);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}

    >
      {
        formikProps => {
          console.log('^^^^^^^^')
          console.log(formikProps);
          return (

            <Form>
              {/* name */}
              <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <Field type='text' id='name' name='name' />
                <ErrorMessage name='name' component={TextError} />
              </div>

              {/* email */}
              <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <Field type='email' id='email' name='email' />
                <ErrorMessage className='errorsMsg' name='email' component='div' />
              </div>

              {/* channel */}
              <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <Field type='text' id='channel' name='channel' />
                <ErrorMessage name='channel'>
                  {
                    (errorMsg) => (<div className='error'>{errorMsg}</div>)
                  }
                </ErrorMessage>
              </div>

              {/* comments */}
              <div className='form-control'>
                <label htmlFor='comments'>Comments</label>
                <Field as='textarea' type='text' id='comments' name='comments' validate={validateComments} />
                <ErrorMessage className='errorsMsg' name='comments' component={TextError} />
              </div>

              {/* address */}
              <div className='form-control'>
                <label htmlFor='address'>Address</label>
                <FastField name='address'>
                  {(props) => {

                    const { field, form, meta } = props;
                    return (
                      <div>
                        <input type='text' id='address' {...field} />
                        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                      </div>
                    );
                  }}
                </FastField>
                <ErrorMessage className='errorsMsg' name='address' component='div' />
              </div>

              {/* social */}
              <div className='form-control'>
                <label htmlFor='facebook'>FaceBook Profile</label>
                <Field type='text' id='facebook' name='social.facebook' />
              </div>

              <div className='form-control'>
                <label htmlFor='twitter'>Twitter Profile</label>
                <Field type='text' id='twitter' name='social.twitter' />
              </div>

              {/* phonePrimary */}
              <div className='form-control'>
                <label htmlFor='phonePrimary'>Phone Primary</label>
                <Field type='text' id='phonePrimary' name='phoneNumbers[0]' />
              </div>

              <div className='form-control'>
                <label htmlFor='phoneSecondary'>Phone Secondary</label>
                <Field type='text' id='phoneSecondary' name='phoneNumbers[1]' />
              </div>

              {/* phNumbers - FieldArray */}
              <div className='form-control'>
                <label htmlFor='phNumbers'>List of Phone Numbers</label>
                <FieldArray name='phNumbers'>{
                  (props) => {

                    const { push, remove, form } = props;
                    {/* const { values } = form */ }
                    const { phNumbers } = form.values


                    return <div>{
                      phNumbers.map((num, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && <button type='button' onClick={() => remove(index)}> - </button>
                          }
                          <button type='button' onClick={() => push('')}> + </button>
                        </div>
                      ))
                    }</div>
                  }

                }
                </FieldArray>
              </div>

              {/* button Validation */}
              <div className='divValidation'>
                <button type='button' className='buttonValidation' onClick={() => validateCommentsHandle(formikProps, 'comments')} >Validate Comments</button>
                <button type='button' className='buttonValidation' onClick={() => validateCommentsHandle(formikProps) }>Validate All</button>
              </div>

              <button type='submit'>Submit</button>
            </Form>
          )
        }
      }

    </Formik>
  );
};

export default YoutubeForm;
