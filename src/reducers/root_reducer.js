import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import followingReducer from "./following_reducer";

export default combineReducers({
  user: userReducer,
  followings: followingReducer
});
