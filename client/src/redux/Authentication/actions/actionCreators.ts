import {
  closeMessageType,
  postLoginFailureType,
  postLoginSuccessType,
  postLoginType,
  postLogoutType,
  postSignupFailureType,
  postSignupSuccessType,
  postSignupType
} from "./actionCreatorsTypes";
import ActionTypesEnum from "./enum";

const postSignup = (data: any): postSignupType => {
  return {
    type: ActionTypesEnum.POST_SIGNUP,
    isLoading: true,
    data
  }
}

const postSignupSuccess = (data: any): postSignupSuccessType => {
  return {
    type: ActionTypesEnum.POST_SIGNUP_SUCCESS,
    isMessage: true,
    isLoading: false,
    data
  }
}

const postSignupFailure = (): postSignupFailureType => {
  return {
    type: ActionTypesEnum.POST_SIGNUP_FAILURE,
    isLoading: false,
  }
}

const closeMessage = (): closeMessageType => {
  return {
    type: ActionTypesEnum.CLOSE_MESSAGE,
    isMessage: false
  }
}

const postLogin = (data: any): postLoginType => {
  return {
    type: ActionTypesEnum.POST_LOGIN,
    isLoading: true,
    data
  }
}

const postLoginSuccess = (data: any): postLoginSuccessType => {
  return {
    type: ActionTypesEnum.POS_LOGIN_SUCCESS,
    isLoading: false,
    isMessage: true,
    data
  }
}

const postLoginFailure = (): postLoginFailureType => {
  return {
    type: ActionTypesEnum.POST_LOGIN_FAILURE,
    isLoading: false
  }
}

const postLogout = (): postLogoutType => {
  return {
    type: ActionTypesEnum.POST_LOGOUT,
    token: null,
    email: null
  }
}

export {
  postSignup,
  postSignupSuccess,
  postSignupFailure,
  closeMessage,
  postLogin,
  postLoginSuccess,
  postLoginFailure,
  postLogout
}