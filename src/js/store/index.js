import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from "../reducers/index";

// Configure store with reducers and create
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
