import {put, call, all, takeEvery} from 'redux-saga/effects';
import {postLoginType, postSignupType} from "../Authentication/actions/actionCreatorsTypes";
import ActionTypesEnum from "../Authentication/actions/enum";
import AuthService from "../Service/AuthService";
import {
  postLoginFailure,
  postLoginSuccess,
  postSignupFailure,
  postSignupSuccess
} from "../Authentication/actions/actionCreators";

const authService = new AuthService()

function* postSignupSaga(action: postSignupType): any {
  try {
    const response = yield call(authService.signup, action.data);
    yield put(postSignupSuccess(response))
  } catch (error) {
    yield put(postSignupFailure())
  }
}

function* postSigninSaga(action: postLoginType): any {
  try {
    const response =  yield call(authService.login, action.data);
    yield put(postLoginSuccess(response))
  } catch (error) {
    yield put(postLoginFailure())
  }
}

function* authSaga() {
  yield all([
    takeEvery(ActionTypesEnum.POST_SIGNUP, postSignupSaga),
    takeEvery(ActionTypesEnum.POST_LOGIN, postSigninSaga)
  ])
}

export {
  authSaga
}