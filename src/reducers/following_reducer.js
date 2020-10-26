import {
  RECEIVE_FOLLOWINGS,
  RECEIVE_NEW_FOLLOWINGS
} from "../actions/user_actions";

export default (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NEW_FOLLOWINGS:
      newState = action.follwings;
      return newState;
    case RECEIVE_FOLLOWINGS:
      newState = Object.assign(state, action.follwings);
      return newState;
    default:
      return state;
  }
};
