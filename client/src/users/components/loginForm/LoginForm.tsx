import React, {FC} from "react";
import {Form, Formik, FormikValues} from "formik";
import {useDispatch} from "react-redux";
import * as Yup from 'yup';
import {postLogin} from "../../../redux/Authentication/actions/actionCreators";

import Input from "../../../shared/components/formElemets/input/Input";

const LoginForm: FC = () => {

  const initialValues = {email: '', password: ''};
  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string()
          .required('Required!')
          .email('Invalid email!'),
        password: Yup.string()
          .required('Required!')
          .min(6, 'Min 6 characters or more')
      })}
      onSubmit={(values: FormikValues, {setSubmitting, resetForm}) => {
        dispatch(postLogin(values))
        setSubmitting(false);
        resetForm()
      }}
    >{({isSubmitting}) => (
      <Form className='form-wrapper'>
        <h1>Login</h1>
        <Input
          label='Email'
          type='email'
          name='email'
          placeholder='example@abc.com'
        />
        <Input
          label='Password'
          type='password'
          name='password'
          placeholder='password'
          autoComplete='on'
        />
        <div className='form-control'>
          <button type='submit' disabled={isSubmitting}>login</button>
        </div>
      </Form>
    )}
    </Formik>
  )

}

export default LoginForm