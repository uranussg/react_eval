import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import User from "./components/User";
import Header from "./components/Header";
import Following from "./components/Following";
import { Provider } from "react-redux";

export default function App({ store }) {
  // const [user, setUser] = useState("");
  // const UserContext = React.createContext([user, setUser]);
  return (
    <Provider store={store}>
      <h1>Hi</h1>
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Switch>
          <Route exact path="/" component={User} />
          <Route exact path="/following" component={Following} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

//<Spinner/> <DataTable>
