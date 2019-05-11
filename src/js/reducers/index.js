import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import postRequestServiceReducer from "./postRequestReducer";


// Combine all reducers as root reducer
export default combineReducers({loginReducer, postRequestServiceReducer});