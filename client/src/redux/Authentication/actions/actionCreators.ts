import {postSignupSuccessType, postSignupType} from "./actionCreatorsTypes";
import ActionTypesEnum from "./enum";

const postSignup = (name: string, email: string, password: string): postSignupType => {
  return {
    type: ActionTypesEnum.POST_SIGNUP,
    isLoading: true
  }
}

const postSignupSuccess = (data: any): postSignupSuccessType => {
  return {
    type: ActionTypesEnum.POST_SIGNUP_SUCCESS,
    isLoading: false,
    data
  }
}

export {
  postSignup,
  postSignupSuccess
}