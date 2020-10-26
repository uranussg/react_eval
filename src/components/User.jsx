import React, { useEffect, useState } from "react";

import { fetchUser } from "../actions/user_actions";
const User = (props) => {
  const { user } = props;

  return <div>{user}</div>;
};

export default User;
