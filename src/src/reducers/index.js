import { combineReducers } from "redux";
import projects from "./projectReducer";
import auth from "./authReducer";
import alert from "./alertReducer"
import form from "./formReducer"

export default combineReducers({ projects, auth, alert, form });
