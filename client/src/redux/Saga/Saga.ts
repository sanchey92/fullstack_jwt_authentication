import {put, call, all, takeEvery} from 'redux-saga/effects';
import {postSignupType} from "../Authentication/actions/actionCreatorsTypes";
import ActionTypesEnum from "../Authentication/actions/enum";
import AuthService from "../Service/AuthService";
import {postSignupFailure, postSignupSuccess} from "../Authentication/actions/actionCreators";

const authService = new AuthService()

function* postSignupSaga(action: postSignupType): any {
  try {
    const response = yield call(authService.signup, action.data);
    yield put(postSignupSuccess(response))
  } catch (e) {
    yield put(postSignupFailure())
  }
}

function* authSaga() {
  yield all([
    takeEvery(ActionTypesEnum.POST_SIGNUP, postSignupSaga)
  ])
}

export {
  authSaga
}