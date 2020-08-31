import ActionTypesEnum from "./enum";

export type postSignupType = {
  type: ActionTypesEnum.POST_SIGNUP,
  isLoading: boolean,
  data: any
}

export type postSignupSuccessType = {
  type: ActionTypesEnum.POST_SIGNUP_SUCCESS,
  isMessage: boolean
  isLoading: boolean,
  data: {
    message: string
  }
}

export type postSignupFailureType = {
  type: ActionTypesEnum.POST_SIGNUP_FAILURE,
  isLoading: boolean
}

export type closeMessageType = {
  type: ActionTypesEnum.CLOSE_MESSAGE,
  isMessage: boolean
}

export type postLoginType = {
  type: ActionTypesEnum.POST_LOGIN,
  isLoading: boolean,
  data: {
    email: string,
    password: string
  }
}

export type postLoginSuccessType = {
  type: ActionTypesEnum.POS_LOGIN_SUCCESS,
  isLoading: boolean,
  isMessage: boolean
  data: {
    email: string,
    token: string,
    message: string,
    userId: string
  }
}

export type postLoginFailureType = {
  type: ActionTypesEnum.POST_LOGIN_FAILURE,
  isLoading: boolean,
}
export type postLogoutType = {
  type: ActionTypesEnum.POST_LOGOUT
  email: string | null,
  token: string | null,
}