import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import UserSignUp from "../components/UserSignUp";
import signUpUserActions from "../actions/signUpAction";

class UserSignUpContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <UserSignUp
                   signUpUserActions={this.props.signUpUserAction}
               />
            </div>
        );
    }
}

function mapStateToProps(state) {
        return {state};
}

function mapDispatchToProps(dispatch) {
    return {
        signUpUserAction: bindActionCreators(signUpUserActions, dispatch),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUpContainer);

