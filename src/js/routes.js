import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from "./App";
import LoginContainer from "./container/LoginContainer";
import ForgotPasswordContainer from "./container/ForgotPasswordContainer";
import UserSignUpContainer from "./container/UserSignUpContainer";
import ConfirmSignUp from "./components/Login/confirmSignup";
import OrgSignUpContainer from "./container/OrgSignUpContainer";
import SearchPostingContainer from "./container/SearchPostingContainer";
import LandingPageContainer from "./container/LandingPageContainer";
import EditVolunteerProfile from "./components/UserDashboard/EditVolunteerProfile";
import ActiveUser from "./components/Login/ActiveUser";
import forgotPasswordEmailScreen from "./components/Login/forgotPasswordEmailScreen";
import EditOrgProfile from "./components/UserDashboard/EditOrgProfile";
import NonProfitOrgContainer from "./container/NonProfitOrgContainer";

export default (
        <Route path="/" component={App}>
            <IndexRoute component={LandingPageContainer} />
            <Route path="login" component={LoginContainer} />
            <Route path="forgotpassword" component={ForgotPasswordContainer} />
            <Route path="usersignup" component={UserSignUpContainer} />
            <Route path="orgsignup" component={OrgSignUpContainer} />
            <Route path="confirmsignup" component={ConfirmSignUp} />
            <Route path="searchposting" component={SearchPostingContainer} />
            <Route path="landingpage" component={LandingPageContainer} />
            <Route path="editVoluteerProfile" component={EditVolunteerProfile} />
            <Route path="organizationDashboard" component={EditOrgProfile} />
            <Route path="activate/:email/:token" component={ActiveUser} />
            <Route path="forgotpassword/:email/:token" component={forgotPasswordEmailScreen} />
            <Route path="findorg" component={NonProfitOrgContainer} />
        </Route>
);