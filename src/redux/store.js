import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { overviewReducer } from "./reducers/overviewReducer";

const appReducer = combineReducers({
  overview: overviewReducer,
});

export const store = createStore(appReducer, applyMiddleware(thunk));
