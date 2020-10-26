import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser, fetchFollowing } from "../actions/user_actions";

const Header = (props) => {
  const [user, setUser] = useState(props.user.login || "");
  const handleSubmit = () => {
    props.fetchUser(user);
    props.fetchFollowing(user, 1);
    // .then(props.match.history.push("/user"));
  };
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/following">following </Link>
      <input value={user} onChange={(e) => setUser(e.target.value)} />
      <button onClick={handleSubmit}>search</button>
    </div>
  );
};

const ms = (state) => {
  return {
    user: state.user
  };
};

const md = (dispatch) => ({
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchFollowing: (user, idx) => dispatch(fetchFollowing(user, idx))
});

export default connect(ms, md)(Header);
