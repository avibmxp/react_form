import formReducer from "./form";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  form: formReducer,
});
export default allReducers;
