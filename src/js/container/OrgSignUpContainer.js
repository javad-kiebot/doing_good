import React, { Component } from "react";
import { connect } from "react-redux";
import OrgSignUp from "../components/OrgSignUp";
import {bindActionCreators} from "redux";
import signUpUserActions from "../actions/signUpAction";

class OrgSignUpContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <OrgSignUp
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

export default connect(mapStateToProps, mapDispatchToProps)(OrgSignUpContainer);

