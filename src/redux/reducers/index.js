import { combineReducers } from "redux";
import { changeThemeReducer } from "./changeThemeReducer";

const reducers = combineReducers({
  changeThemeReducer,
});

export default reducers;
