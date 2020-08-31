import {
  closeMessageType, postLoginFailureType, postLoginSuccessType,
  postLoginType, postLogoutType,
  postSignupFailureType,
  postSignupSuccessType,
  postSignupType
} from "./actionCreatorsTypes";

type AuthActions =
  postSignupType
  | postSignupSuccessType
  | postSignupFailureType
  | closeMessageType
  | postLoginType
  | postLoginSuccessType
  | postLoginFailureType
  | postLogoutType

export default AuthActions