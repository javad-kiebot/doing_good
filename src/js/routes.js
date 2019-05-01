import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from "./App";
import LoginContainer from "./container/LoginContainer";
import ForgotPasswordContainer from "./container/ForgotPasswordContainer";
import UserSignUpContainer from "./container/UserSignUpContainer";
import ConfirmSignUp from "./components/confirmSignup";
import OrgSignUpContainer from "./container/OrgSignUpContainer";
import SearchPostingContainer from "./container/SearchPostingContainer";
import LandingPageContainer from "./container/LandingPageContainer";

export default (
        <Route path="/" component={App}>
            <IndexRoute component={LoginContainer} />
            <Route path="forgotpassword" component={ForgotPasswordContainer} />
            <Route path="usersignup" component={UserSignUpContainer} />
            <Route path="orgsignup" component={OrgSignUpContainer} />
            <Route path="confirmsignup" component={ConfirmSignUp} />
            <Route path="searchposting" component={SearchPostingContainer} />
            <Route path="landingpage" component={LandingPageContainer} />
        </Route>
);