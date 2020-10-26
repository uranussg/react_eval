import * as APIUtil from "../utils/api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_FOLLOWINGS = "RECEIVE_FOLLOWINGS";
export const RECEIVE_NEW_FOLLOWINGS = "RECEIVE_NEW_FOLLOWINGS";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveFollowings = (followings) => ({
  type: RECEIVE_FOLLOWINGS,
  followings: followings
});

export const receiveNewFollowings = (followings) => ({
  type: RECEIVE_NEW_FOLLOWINGS,
  followings: followings
});

export const fetchUser = (user) => (dispatch) => {
  return APIUtil.getUser(user).then((user) => {
    // console.log(user);
    dispatch(receiveUser(user));
  });
};

export const fetchFollowing = (user, idx) => (dispatch) => {
  // console.log(user, idx)
  return APIUtil.getFollwing(user, idx).then((followings) => {
    // console.log(idx)
    idx <= 1
      ? dispatch(receiveNewFollowings(followings))
      : dispatch(receiveFollowings(followings));
  });
};
