import React, { Component } from "react";
import orangetick from "../../assests/images/home/orangetick.png";
import {hashHistory} from "react-router";


class ConfirmSignUp extends Component {
    constructor(props){
        super(props);
        this.redirectSignup = this.redirectSignup.bind(this);
    }

    redirectSignup (){
        hashHistory.push('/login');
    }
    render() {
        return (
            <div className="container-fluid">
                <center>
                    <div className="custom-confirm-div"><h2 className="charity-label-confirm"> DoingGood</h2>
                        <div className="form-group"><img src={orangetick} width="10%"/></div>
                        <div className="form-group"><h4 style={{color: 'rgb(64, 38, 102)'}}> Thank You! </h4><p
                            className="confirmVerify"> Verification link has been sent to your registered
                            Email ID. Please check your inbox</p></div>
                        <div className="login-footer clearfix">
                            <button className="btn confirmButton" onClick={this.redirectSignup}>
                                <span className="confrimBackLogin">⇦ Back to Login</span></button>
                        </div>
                        <br/><br/><br/></div>
                </center>
            </div>
        );
    }
}


export default ConfirmSignUp;



