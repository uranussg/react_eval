import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/user_actions";
const User = (props) => {
  const user = props.user || "demo";

  return (
    <div>
      <ul>
        <li>{user.avatar_url}</li>
        <li>{user.login}</li>
        <li>followers: {user.followers}</li>
      </ul>
    </div>
  );
};

const ms = (state) => {
  // console.log(state);
  return {
    user: state.user,
    followings: state.followings
  };
};

const md = (dispatch) => ({
  fetchUser: (user) => dispatch(fetchUser(user))
});

export default connect(ms, md)(User);
