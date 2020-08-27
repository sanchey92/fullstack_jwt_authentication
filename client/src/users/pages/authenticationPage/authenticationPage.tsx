import React, {FC} from "react";

import './auth.css';
import AuthForm from "../../components/authForm/AuthForm";

const AuthenticationPage: FC = () => {

  return (
    <div className='form'>
      <AuthForm />
    </div>
  )
}

export default AuthenticationPage