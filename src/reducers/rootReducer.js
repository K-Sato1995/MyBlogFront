import { combineReducers } from "redux";
import postReducer from "./postReducer";
import categoryReducer from "./categoryReducer";
import tagReducer from "./tagReducer";

export default combineReducers({
  postReducer,
  categoryReducer,
  tagReducer
});
