import {
  RECEIVE_FOLLOWINGS,
  RECEIVE_NEW_FOLLOWINGS
} from "../actions/user_actions";

export default (state = [], action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_FOLLOWINGS:
      newState = action.followings.data;
      // console.log(action,'new')
      return newState;
    case RECEIVE_FOLLOWINGS:
      console.log(action, "old");
      newState = state.concat(action.followings.data);
      return newState;
    default:
      return state;
  }
};
