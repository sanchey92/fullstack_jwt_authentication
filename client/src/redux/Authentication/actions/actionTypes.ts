import {postSignupFailureType, postSignupSuccessType, postSignupType} from "./actionCreatorsTypes";

type AuthActions =
  postSignupType
  | postSignupSuccessType
  | postSignupFailureType

export default AuthActions