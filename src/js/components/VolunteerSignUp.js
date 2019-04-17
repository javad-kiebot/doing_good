import React, { Component } from "react";
import { Link } from 'react-router';
class VolunteerSignUp extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center login-wrapper signup-page">
                <div className="card">
                    <div className="card-body" style={{"text-align": "center"}}>
                        <form>
                            <div className="row mb-2">
                                <div className="col-4">
                                    <img src="img/DoingGood_logo_HERO.png" alt="logo" width="80"/>
                                </div>
                                <div className="col-8 d-flex justify-content-end align-items-center">
                                    <Link to="/login">Have an account? Login</Link>
                                </div>
                            </div>
                            <div className="form-group mb-2">
                                <label>First Name*</label>
                                <input className="form-control" type="text" placeholder="Please enter first name"/>
                            </div>
                            <div className="form-group mb-2">
                                <label>Last Name*</label>
                                <input className="form-control" type="text" placeholder="Please enter last name"/>
                            </div>
                            <div className="form-group mb-2">
                                <label>City</label>
                                <input className="form-control" type="text" placeholder="Please enter City"/>
                            </div>
                            <div className="form-group mb-2">
                                <label>State</label>
                                <input className="form-control" type="text" placeholder="Please enter State"/>
                            </div>
                            <div className="form-group mb-2">
                                <label>Email*</label>
                                <input className="form-control" type="email" placeholder="Please enter email"/>
                            </div>
                            <div className="form-group mb-2">
                                <label>Password*</label>
                                <input className="form-control" type="text" placeholder="Please enter password"/>
                            </div>
                            <div className="form-group mb-2">
                                <label>Phone Number</label>
                                <input className="form-control" type="text" placeholder="Please enter phone number"/>
                            </div>
                            <div className="form-group mb-3">
                                <label>About Me</label>
                                <textarea className="form-control" placeholder="About me" />
                            </div>
                            <button className="btn btn-primary btn-block fw-600 py-2" type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

VolunteerSignUp.propTypes = {

};

export default VolunteerSignUp;
