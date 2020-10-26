import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/root_reducer";

const configureStore = (preloadState = {}) =>
  createStore(rootReducer, preloadState, applyMiddleware(thunk));

const root = document.getElementById("root");

let store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  root
);
document.addEventListener("DOMContentLoaded", () => {});
