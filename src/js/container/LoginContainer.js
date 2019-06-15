import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login/Login";
import {bindActionCreators} from "redux";
import loginActions from "../actions/loginActions";

class LoginContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>

              <Login
                  loginActions={this.props.loginAction}
                  token={this.props.token}
                  session={this.props.session}
              />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        token:state.loginReducer.token,
        user: state.loginReducer.user,
        session:state.loginReducer.session
        //session:state.loginReducer.session
        // WorkRequests:state.landingpage.WorkRequests,
        // loadInterestShownWRData:state.landingpage.loadInterestShownWRData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginAction: bindActionCreators(loginActions, dispatch),
        // landingpageactions:bindActionCreators(landingpageactions,dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

