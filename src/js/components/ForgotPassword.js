import React, { Component } from "react";
import { Link } from 'react-router';

class ForgotPassword extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center login-wrapper">
                <div className="card">
                    <div className="card-body">
                        <h2 className="title text-center mt-0 mb-4">DoingGood</h2>
                        <h3 className="title text-center mt-0 mb-4"> Forgot Password </h3>
                        <form>
                            <div className=" form-group input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Registered Email Id"/>
                            </div>
                            <button className="btn btn-success btn-block fw-600 py-2 mb-4" type="submit">Forgot Password</button>
                        </form>
                        <div className="form-group">
                            <Link to="/login" className="pull-right btn btn-link"
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
