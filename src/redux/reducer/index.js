import { combineReducers } from "redux";
import loader from "./loader";
import courses from "./course";

const rootReducer = combineReducers({
  loader,
  courses
});
export default rootReducer;
