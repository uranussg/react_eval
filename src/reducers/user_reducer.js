import { RECEIVE_USER } from "../actions/user_actions";

export default (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      newState = action.user.data;
      return newState;
    default:
      return state;
  }
};
