import ActionTypesEnum from "./enum";

export type postSignupType = {
  type: ActionTypesEnum.POST_SIGNUP,
  isLoading: boolean,
  data: any
}

export type postSignupSuccessType = {
  type: ActionTypesEnum.POST_SIGNUP_SUCCESS,
  isLoading: boolean,
  data: {
    message: string
  }
}

export type postSignupFailureType = {
  type: ActionTypesEnum.POST_SIGNUP_FAILURE,
  isLoading: boolean
}