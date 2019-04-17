import React from 'react';
import { Route } from 'react-router';
import CounterContainer from './container/CounterContainer';
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import VolunteerSignUp from "./components/VolunteerSignUp";
import App from "./App";
import OrgSignUp from "./components/OrgSignUp";

export default (
        <Route path="/" component={App}>
            <Route path="login" component={Login} />
            <Route path="forgotpassword" component={ForgotPassword} />
            <Route path="volunteersignup" component={VolunteerSignUp} />
            <Route path="orgsignup" component={OrgSignUp} />
        </Route>
);