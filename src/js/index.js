import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "../js/store/index";
import App from "./App";
import routes from "./routes";
import {hashHistory, Router} from "react-router";

// Provider to init redux store with app
render(
    <Provider store={store}>
        <Router routes={routes} history={hashHistory} />
    </Provider>,
    document.getElementById("app")
);