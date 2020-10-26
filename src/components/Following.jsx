import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchFollowing } from "../actions/user_actions";

const Following = (props) => {
  const user = props.user;
  const [idx, setIdx] = useState(1);
  useEffect(() => {
    props.fetchFollowing(user.login, idx).then((followings) => {
      // setFollowings(followings);
      setIdx(idx + 1);
    });
  }, []);
  const loadMore = () => {
    props.fetchFollowing(user.login, idx).then((followings) => {
      // setFollowings(followings);
      setIdx(idx + 1);
    });
  };
  console.log("followings", props.followings, "idx", idx);
  return (
    <div>
      {props.followings.length}
      <button onClick={loadMore}>load more</button>
    </div>
  );
};

const ms = (state) => {
  // console.log(state.followings)
  return {
    user: state.user,
    followings: state.followings
  };
};

const md = (dispatch) => ({
  fetchFollowing: (user, idx) => dispatch(fetchFollowing(user, idx))
});

export default connect(ms, md)(Following);
