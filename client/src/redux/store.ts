import {createStore, applyMiddleware, combineReducers, Store} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension/index";
import authReducer from "./Authentication/reducer/authenticationRedcer";

//sagaMiddleware

const rootReducer = combineReducers({
  authState: authReducer
})

export default function configureStore() : Store<any, any> {
  const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware())
  )
  //saga
  return store
}