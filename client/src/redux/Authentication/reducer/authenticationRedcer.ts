import {AuthState} from "./stateTypes";
import {Reducer} from "react";
import AuthActions from "../actions/actionTypes";
import ActionTypesEnum from "../actions/enum";

const initialState: AuthState = {
  name: null,
  email: null,
  password: null,
  token: null,
  isLoading: false,
  message: null
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
          message: actions.data.message
        };

      case ActionTypesEnum.POST_SIGNUP_FAILURE:
        return {
          ...state,
          isLoading: actions.isLoading
        }

      default:
        return state
    }
  }

export default authReducer;