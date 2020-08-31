import {AuthState} from "./stateTypes";
import {Reducer} from "react";
import AuthActions from "../actions/actionTypes";
import ActionTypesEnum from "../actions/enum";

const initialState: AuthState = {
  name: null,
  email: null,
  token: null,
  isLoading: false,
  message: null,
  isMessage: false
};

const authReducer: Reducer<AuthState, AuthActions> =
  (state = initialState, actions): AuthState => {

    switch (actions.type) {

      case ActionTypesEnum.POST_SIGNUP:
        return {
          ...state,
          isLoading: actions.isLoading
        };

      case ActionTypesEnum.POST_SIGNUP_SUCCESS:
        return {
          ...state,
          isLoading: actions.isLoading,
          message: actions.data.message,
          isMessage: actions.isMessage
        };

      case ActionTypesEnum.POST_SIGNUP_FAILURE:
        return {
          ...state,
          isLoading: actions.isLoading
        }

      case ActionTypesEnum.CLOSE_MESSAGE:
        return {
          ...state,
          isMessage: actions.isMessage
        }

      case ActionTypesEnum.POST_LOGIN:
        return {
          ...state,
          isLoading: actions.isLoading
        }

      case ActionTypesEnum.POS_LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: actions.isLoading,
          isMessage: actions.isMessage,
          email: actions.data.email,
          token: actions.data.token,
          message: actions.data.message
        }

      case ActionTypesEnum.POST_LOGIN_FAILURE:
        return {
          ...state,
          isLoading: actions.isLoading
        }

      case ActionTypesEnum.POST_LOGOUT:
        return {
          ...state,
          email: actions.email,
          token: actions.token
        }

      default:
        return state
    }
  }

export default authReducer;