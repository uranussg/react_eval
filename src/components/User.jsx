import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/user_actions";
const User = (props) => {
  const { user } = props;

  return <div>{user}</div>;
};

const ms = (state) => {
  return {
    user: state.user,
    followings: state.follwings
  };
};

const md = (dispatch) => ({
  fetchUser: (user) => dispatch(fetchUser(user))
});

export default connect(ms, md)(User);
