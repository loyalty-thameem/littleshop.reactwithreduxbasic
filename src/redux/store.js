import { applyMiddleware, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { allReducer } from "./reducers";

export const store = legacy_createStore(
    allReducer,
    composeWithDevTools(applyMiddleware(logger))
)
