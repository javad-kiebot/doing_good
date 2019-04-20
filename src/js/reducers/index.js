import { combineReducers } from "redux";
import loginReducer from "./loginReducer";


// Combine all reducers as root reducer
export default combineReducers({loginReducer});