import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions/user_actions";

const Header = (props) => {
  const [user, setUser] = useState(props.username);
  const handleSubmit = () => {
    props.fetchUser(user).then(this.props.match.history.push("/user"));
  };
  return (
    <div>
      <Link to="/user">User </Link>
      <Link to="/following">following </Link>
      <input value={user} onChange={(e) => setUser(e.target.value)} />
      <button onClick={handleSubmit}>search</button>
    </div>
  );
};

const ms = (state) => {
  return {
    username: state.user.username
  };
};

const md = (dispatch) => ({
  fetchUser: (user) => dispatch(fetchUser(user))
});

export default connect(ms, md)(Header);
