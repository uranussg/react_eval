import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchFollowing } from "../actions/user_actions";

const Following = (props) => {
  const { user } = props;
  const [followings, setFollowings] = useState(props.followings);
  const [idx, setIdx] = useState(1);
  const loadMore = () => {
    fetchFollowing(user, idx).then((followings) => {
      setFollowings(followings);
      setIdx(idx + 1);
    });
  };
  return (
    <div>
      {followings}
      <button onClick={loadMore}>load more</button>
    </div>
  );
};

const ms = (state) => {
  return {
    user: state.user.username,
    followings: state.follwings
  };
};

const md = (dispatch) => ({
  fetchFollowing: (user, idx) => dispatch(fetchFollowing(user, idx))
});

export default connect(ms, md)(Following);
