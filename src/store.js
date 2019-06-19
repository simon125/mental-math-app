import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer, learnPlaceReducer } from "./reducers/index";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ authReducer, learnPlaceReducer });

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
