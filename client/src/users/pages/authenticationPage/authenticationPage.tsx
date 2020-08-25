import React, {FC} from "react";
import {Formik, Form} from "formik";
import * as Yup from 'yup';

import Input from "../../../shared/components/formElemets/Input";

import './auth.css';

const AuthenticationPage: FC = () => {

  return (
    <div className='form'>
      <Formik
        initialValues={{firstname: '', lastName: '', email: ''}}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required('Required!')
            .max(15, 'Must be 15 characters or less'),
          lastName: Yup.string()
            .required('Required!')
            .max(20, 'Must be 20 characters or less'),
          email: Yup.string()
            .required('Required!')
            .email('Invalid email!')
        })}
        onSubmit={(values: any, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <Form className='form-wrapper'>
          <h1>Authentication</h1>
          <Input
            label='First Name'
            name='firstName'
            type='text'
            placeholder='Alexandr'
          />
          <Input
            label='Last Name'
            name='lastName'
            type='text'
            placeholder='Ageev'
          />
          <Input
            label='Email'
            name='email'
            type='email'
            placeholder='example@.com'
          />
          <button
            type='submit'
          >Submit
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default AuthenticationPage