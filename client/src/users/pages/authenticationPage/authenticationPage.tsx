import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";

import {closeMessage} from "../../../redux/Authentication/actions/actionCreators";
import {StoreInterface} from "../../../redux/StoreInterface";

import Modal from "../../../shared/components/UI/modal/modal";
import AuthForm from "../../components/authForm/AuthForm";

import './auth.css';
import LoginForm from "../../components/loginForm/LoginForm";

const AuthenticationPage: FC = () => {

  const authState = useSelector((state: StoreInterface) => state.authState);
  const dispatch = useDispatch();

  const closeMessageHandler = () => {
    dispatch(closeMessage())
  }

  return (
    <div className='form'>
      <>
        <Modal
          show={authState.isMessage}
          header={'Message'}
          footer={<button onClick={closeMessageHandler}>close</button>}
          onCancel={closeMessageHandler}
        >
          {authState.message}
        </Modal>
        <LoginForm/>
      </>
    </div>
  )
}

export default AuthenticationPage