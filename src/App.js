import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

import { getUser, getFollwing } from "./utils/api_util";

const User = (props) => {
  const { user } = props;
  const [data, setData] = useState("");
  // useEffect(() => {
  //   getUser(user).then((data) => setData(data))
  //   .catch(error => setData(error));

  // });
  return <div></div>;
};

const Following = (props) => {
  return <div>Following</div>;
};

export default function App() {
  const [user, setUser] = useState("");
  const UserContext = React.createContext([user, setUser]);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>{user}</div>
      <BrowserRouter>
        <Route
          path="/"
          component={() => <Header user={user} setUser={setUser} />}
        />
        <Route
          exact
          path="/following"
          component={() => <Following user={user} />}
        />
        <Route exact path="/user" component={() => <User user={user} />} />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

const Header = (props) => {
  const { user, setUser } = props;
  return (
    <div>
      <Link to="/user">User </Link>
      <Link to="/following">following </Link>
      <input value={user} onChange={(e) => setUser(e.target.value)} />
      {/* <button onClick={handleSubmit}>search</button> */}
    </div>
  );
};

//<Spinner/> <DataTable>
