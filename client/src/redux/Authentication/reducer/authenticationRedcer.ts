import {AuthState} from "./stateTypes";
import {Reducer} from "react";
import AuthActions from "../actions/actionTypes";
import ActionTypesEnum from "../actions/enum";

const initialState: AuthState = {
  name: null,
  email: null,
  password: null,
  token: null,
  isLoading: false
};

const authReducer: Reducer<AuthState, AuthActions> = (state = initialState, actions): AuthState => {

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
        name:  actions.data.name,
        email: actions.data.email,
        token: actions.data.token
      }

    default:
      return state
  }
}

export default authReducer;