import React, { Component } from "react";
import { Link } from 'react-router';
import lockImg from "../../../assests/images/icons/lock.svg";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import forgotActions from "../../actions/forgotActions";

class forgotPasswordEmailScreen extends Component {
    constructor() {
        super();
        this.credentials = {
            password: '',
            confirmPassword: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(data) {
        switch(data.target.name) {
            case 'password':
                this.credentials.password = data.target.value;
                break;
            case 'confirmPassword':
                this.credentials.confirmPassword = data.target.value;
                break;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.forgotAction.resetpassword(this.props.params.email,this.props.params.token,this.credentials);
    }
    render() {
        return (
            <div className="d-flex align-items-center justify-content-center login-wrapper">

                <div className="card">
                    <div className="card-body">
                        <h2 className="title text-center mt-0 mb-4">DoingGood</h2>
                        <form>
                            <div className=" form-group input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><img src={lockImg} width="18"/></span>
                                </div>
                                <input type="password" name="password" className="form-control" onChange={this.handleChange} placeholder="Password"/>
                            </div>
                            <div className=" form-group input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><img src={lockImg} width="18"/></span>
                                </div>
                                <input type="password" name="confirmPassword" className="form-control" onChange={this.handleChange} placeholder="Confirm password"/>
                            </div>
                            <button className="btn btn-primary btn-block fw-600 py-2 mb-4 loginButton" onClick={this.handleSubmit} type="button">Reset Password</button>
                        </form>
                    </div>
                    <button className="btn"><Link to="/login">Return to login</Link></button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{session:state.loginReducer.session}
};

function mapDispatchToProps(dispatch) {
    return {
        forgotAction: bindActionCreators(forgotActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(forgotPasswordEmailScreen);
