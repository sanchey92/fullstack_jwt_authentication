import ActionTypesEnum from "./enum";

export type postSignupType = {
  type: ActionTypesEnum.POST_SIGNUP,
  isLoading: boolean
}

export type postSignupSuccessType = {
  type: ActionTypesEnum.POST_SIGNUP_SUCCESS,
  isLoading: boolean,
  data: {
    name: string,
    email: string,
    token: string
  }
}