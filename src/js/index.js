import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import ReduxToastr from 'react-redux-toastr';
import store from "../js/store/index";
import routes from "./routes";
import {hashHistory, Router} from "react-router";


// Provider to init redux store with app
render(
    <Provider store={store}>
        <div>
            <Router routes={routes} history={hashHistory} />
            <ReduxToastr
                maxAnimationDelay={5000}
                newestOnTop={false}
                preventDuplicates
                position="top-right"
                transitionIn="bounceIn"
                transitionOut="bounceOut"
            />
        </div>
    </Provider>,
    document.getElementById("app")
);