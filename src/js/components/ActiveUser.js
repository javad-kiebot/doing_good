import React, { Component } from "react";
import {hashHistory, Link} from "react-router";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import signUpUserActions from "../actions/signUpAction";
import userIMg from "../../assests/images/icons/user.svg";
import lockImg from "../../assests/images/icons/lock.svg";


class ActiveUser extends Component {
    constructor(props) {
        super(props);
        this.redirectSignup = this.redirectSignup.bind(this);
    }

    redirectSignup() {
        // this.props.signUpUserAction.ActivateUser();
        hashHistory.push('/login');
    }
    componentDidMount(){
            this.props.signUpUserAction.ActivateUser(this.props.params.email,this.props.params.token);
    }
    render() {
        return (
            <div className="d-flex align-items-center justify-content-center login-wrapper">
                <div className="card">
                    <div className="card-body">
                        <h2 className="title text-center mt-0 mb-4">DoingGood</h2>
                        <h3 className="text-center">Activate User</h3>
                        <button className="btn"><Link to="/login">Return to login</Link></button>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ActiveUser);




