import React, { Component } from "react";
import { Link } from 'react-router';
import userIMg from "../../../assests/images/icons/user.svg";
import lockImg from "../../../assests/images/icons/lock.svg";
import {toastr} from 'react-redux-toastr';

class Login extends Component {
    constructor() {
        super();
        this.credentials = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectForgotPassword = this.redirectForgotPassword.bind(this);
        this.redirectSignup = this.redirectSignup.bind(this);
        this.usersignup = this.usersignup.bind(this);
    }

    handleChange(data) {
        switch(data.target.name) {
            case 'email':
                this.credentials.email = data.target.value;
                break;
            case 'password':
                this.credentials.password = data.target.value;
                break;
        }
        this.credentials.strategy = 'local';
    }

    handleSubmit(e) {
        e.preventDefault();
        if(!this.credentials.email || !this.credentials.password){
            toastr.error('Error ', 'Either login or password field is empty');
            return;
        }
        let token = this.props.token;
        this.props.loginActions.loginUser(this.credentials);
    }

    redirectForgotPassword(e){
        this.props.loginActions.redirectForgotPassword();
    }

    usersignup(){
        this.props.loginActions.gotousersignup();
    }

    componentWillMount(){
        // this.props.landingpageactions.getWR();
        // this.props.landingpageactions.loadInterestShownWRData();
    }

    redirectSignup(){
        this.props.loginActions.redirectOrgSignup();
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
                                    <span className="input-group-text"><img src={userIMg} width="18"/></span>
                                </div>
                                <input type="email" name="email" className="form-control" onChange={this.handleChange} placeholder="Username"/>
                            </div>
                            <div className=" form-group input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><img src={lockImg} width="18"/></span>
                                </div>
                                <input type="password" name="password" className="form-control" onChange={this.handleChange} placeholder="Password"/>
                            </div>
                            <p className="text-right"><Link to="/forgotpassword" className="text-black-50">Forgot Password?</Link></p>
                            <button className="btn btn-primary btn-block fw-600 py-2 mb-4 loginButton" onClick={this.handleSubmit} type="button">Login</button>
                            <div className="text-center">
                                <p className="text-secondary mb-2">Don't have an account?</p>
                                <Link to="/usersignup" className="text-success mb-1">Volunteer Sign up</Link>
                                <p className="text-secondary mb-1">OR</p>
                                <Link to="/orgsignup" className="text-info">Organisation Sign up?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {

};

export default Login;
