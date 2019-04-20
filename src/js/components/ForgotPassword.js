import React, { Component } from "react";
import { Link } from 'react-router';
import {toastr} from 'react-redux-toastr';


class ForgotPassword extends Component {
    constructor() {
        super();
        this.credentials = {
            email: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // redirectLogin(e){
    //     this.props.resetpasswordActions.redirectLogin();
    // }

    handleChange(data) {
        this.credentials.email = data.target.value;
    }

    handleSubmit(e) {
        e.preventDefault();
        if(!this.credentials.email){
            toastr.error('Error', 'Enter registered Email Address');
            return;
        }
        this.props.forgotActions.forgotPassword(this.credentials);
    }

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center login-wrapper">
                <div className="card">
                    <div className="card-body">
                        <h2 className="title text-center mt-0 mb-4 doingGoodForgotPwd">DoingGood</h2>
                        <h3 className="title text-center mt-0 mb-4 forgotPasword"> Forgot Password </h3>
                        <form>
                            <div className=" form-group input-group mb-3">

                                    <span className="input-group-text messageIcon">
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                    </span>
                                    <input type="text" onChange={this.handleChange} className="form-control" placeholder="Registered Email Id"/>

                            </div>
                            <button className="btn btn-success btn-block fw-600 py-2 mb-4" onClick={this.handleSubmit} type="button">Forgot Password</button>
                        </form>
                        <div className="form-group">
                            <Link to="/" className="pull-right btn btn-link"
                                  style={{"color": "rgb(0, 169, 157)", "margin-top": "-12px", "margin-right": "-10px"}}>
                                Back to Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;
