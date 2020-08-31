import React, {FC} from "react";
import {Form, Formik, FormikValues} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {postSignup} from "../../../redux/Authentication/actions/actionCreators";
import Input from "../../../shared/components/formElemets/input/Input";

const AuthForm: FC = () => {

  const dispatch = useDispatch();

  const initialSignup = {name: '', email: '', password: ''};

  return (
    <Formik
      initialValues={initialSignup}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Required!')
          .max(15, 'Must be 15 characters or less'),
        email: Yup.string()
          .required('Required!')
          .email('Invalid email'),
        password: Yup.string()
          .required('Required!')
          .min(6, 'Min 6 characters')
      })}
      onSubmit={(values: FormikValues, {setSubmitting, resetForm}) => {
        dispatch(postSignup(values))
        setSubmitting(false);
        resetForm()
      }}
    >{({isSubmitting}) => (
      <Form className='form-wrapper'>
        <h1>Authentication</h1>
        <Input
          label='Name'
          name='name'
          type='text'
          placeholder='Alexandr'
        />
        <Input
          label='Email'
          name='email'
          type='email'
          placeholder='example@gmail.com'
        />
        <Input
          label='Password'
          name='password'
          type='password'
          placeholder='password'
          autoComplete='on'
        />
        <div className='form-footer'>
          <button
            disabled={isSubmitting}
            type='submit'
          >
            Submit
          </button>
        </div>
      </Form>
    )}

    </Formik>
  )
}

export default AuthForm