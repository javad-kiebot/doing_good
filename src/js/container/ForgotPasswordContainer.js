import React, { Component } from "react";
import { connect } from "react-redux";
import ForgotPassword from "../components/Login/ForgotPassword";
import {bindActionCreators} from "redux";
import forgotActions from "../actions/forgotActions";


class ForgotPasswordContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ForgotPassword
                    forgotActions={this.props.forgotAction}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        forgotAction: bindActionCreators(forgotActions, dispatch),
    };
};

const mapStateToProps = (state) => {
    return {state};
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer);

