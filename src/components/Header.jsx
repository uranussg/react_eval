import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions/user_actions";

const Header = (props) => {
  const [user, setUser] = useState(props.user || "");
  const handleSubmit = () => {
    props.fetchUser(user);
    // .then(props.match.history.push("/user"));
  };
  return (
    <div>
      <div>{Object.keys(props)}</div>
      <Link to="/user">User </Link>
      <Link to="/following">following </Link>
      <input value={user} onChange={(e) => setUser(e.target.value)} />
      <button onClick={handleSubmit}>search</button>
    </div>
  );
};

const ms = (state) => {
  return {
    user: state.user.data
  };
};

const md = (dispatch) => ({
  fetchUser: (user) => dispatch(fetchUser(user))
});

export default connect(ms, md)(Header);
