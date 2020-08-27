import {createStore, applyMiddleware, combineReducers, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension/index";
import {authSaga} from "./Saga/Saga";
import authReducer from "./Authentication/reducer/authenticationRedcer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  authState: authReducer
})

export default function configureStore() : Store<any, any> {
  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(authSaga)
  return store
}