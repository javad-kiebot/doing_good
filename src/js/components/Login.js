import React, { Component } from "react";
import { Link } from 'react-router';
import userIMg from "../../assests/images/icons/user.svg";
import lockImg from "../../assests/images/icons/lock.svg";

class Login extends Component {
    constructor() {
        super();
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
                                <input type="text" className="form-control" placeholder="Username"/>
                            </div>
                            <div className=" form-group input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><img src={lockImg} width="18"/></span>
                                </div>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <p className="text-right"><Link to="/forgotpassword" className="text-black-50">Forgot Password?</Link></p>
                            <button className="btn btn-primary btn-block fw-600 py-2 mb-4" type="submit">Login</button>
                            <div className="text-center">
                                <p className="text-secondary mb-2">Don't have an account?</p>
                                <Link to="/volunteersignup" className="text-success mb-1">Volunteer Sign up</Link>
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
