import * as APIUtil from "../utils/api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_FOLLOWINGS = "RECEIVE_FLLOWINGS";
export const RECEIVE_NEW_FOLLOWINGS = "RECEIVE_NEW_FLLOWINGS";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveFollowings = (follwings) => ({
  type: RECEIVE_FOLLOWINGS,
  follwings: follwings
});

export const receiveNewFollowings = (follwings) => ({
  type: RECEIVE_FOLLOWINGS,
  follwings: follwings
});

export const fetchUser = (user) => (dispatch) => {
  console.log(user);
  return APIUtil.getUser(user).then((user) => dispatch(receiveUser(user)));
};

export const fetchFollowing = (user, idx) => (dispatch) => {
  return APIUtil.getFollwing(user, idx).then((followings) => {
    idx === 1
      ? dispatch(receiveNewFollowings(followings))
      : dispatch(receiveFollowings(followings));
  });
};
