import {postSignupFailureType, postSignupSuccessType, postSignupType} from "./actionCreatorsTypes";
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

export {
  postSignup,
  postSignupSuccess,
  postSignupFailure
}