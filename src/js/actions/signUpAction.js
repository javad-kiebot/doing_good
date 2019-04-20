import axios from 'axios';
import {toastr} from 'react-redux-toastr'
import {hashHistory} from "react-router";

let signUpUserActions = {

    displayhomepage:function(){
        hashHistory.push('/');
    },

    gotologin:function(){
        hashHistory.push('/login');
    },

    signupOrg: function(orgcreds){
        var charitydetails = {
            organisationdetails : {
                name:orgcreds.orgname,
                city:orgcreds.city,
                state:orgcreds.state,
                description:orgcreds.aboutme,
                total_amt:0
            },
            socialconnections : {
                website: orgcreds.website
            },
            bankdetails : {
                country:'USA',
                currency:'USD',
                accountnumber:''
            }
        };

        const request = {
            method: 'post',
            responseType: 'json',
            url: 'https://gamma.valueaddsofttech.com:4000/users',
            data: {
                "charitydetails":charitydetails,
                "city":orgcreds.city,
                "state":orgcreds.state,
                "mobilenumber" : orgcreds.phone,
                "email" : orgcreds.email,
                "password" : orgcreds.password,
                "role": orgcreds.role,
                "status": 'inactive',

            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 201) {
                        var signupResponse = response.data;
                        hashHistory.push("/confirmsignup");
                        dispatch({
                            type: 'LOGGED_IN',
                            data: response.data.user,token:response.data.accessToken
                        });
                        // window.localStorage.setItem("sessionUser", JSON.stringify(signupResponse));
                    }
                },err => {
                    if(err.response.data.code === 409){
                        toastr.error('Error while signing up user', 'Email already exists')
                    }
                })
        }
    },

    signupUser: function(orgcreds){
        var volunteerdetails = {
            aboutvolunteer:orgcreds.aboutme,
            bankdetails : {
                country:'USA',
                currency:'USD',
                accountnumber:''
            }
        };
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'https://gamma.valueaddsofttech.com:4000/users',
            data: {
                "volunteerdetails":volunteerdetails,
                "firstname":orgcreds.firstname,
                "lastname":orgcreds.lastname,
                "city":orgcreds.city,
                "state":orgcreds.state,
                "mobilenumber" : orgcreds.phone,
                "email" : orgcreds.email,
                "password" : orgcreds.password,
                "role": orgcreds.role,
                "status": 'inactive',
                "total_amt":0
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 201) {
                        var signupResponse = response.data;
                        hashHistory.push("/confirmsignup");
                        dispatch({
                            type: 'LOGGED_IN',
                            data: response.data.user,token:response.data.accessToken
                        });
                    }
                },err => {
                    if(err.response.data.code === 409){
                        toastr.error('Error while signing up user', 'Email already exists')
                    }
                })
        }
    },

    signupActions: function(userCredentials) {
        const request = {
            method: 'post',
            responseType: 'json',
            url: '/users',
            data: {
                "firstname" : userCredentials.firstName,
                "lastname" : userCredentials.lastName,
                "mobilenumber" : userCredentials.cell,
                "email" : userCredentials.email,
                "password" : userCredentials.password,
                "role": userCredentials.userRole,
                "status": 'inactive'

            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 201) {
                        var signupResponse = response.data;
                        hashHistory.push("/confirmsignup");
                        dispatch({
                            type: 'LOGGED_IN',
                            data: response.data.user,token:response.data.accessToken
                        });
                        window.localStorage.setItem("sessionUser", JSON.stringify(signupResponse));
                    }
                },err => {
                    if(err.response.data.code === 409){
                        toastr.error('Error while signing up user', 'Email already exists')
                    }
                })
        }
    },

    redirectLogin : function () {
        hashHistory.push('/login');
    },

    ActivateUser : function (email,updatData) {
        const request = {
            method: 'patch',
            responseType: 'json',
            url: '/activateuser?email='+email,
            data: {
                "status": updatData.status
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {

                    } else if(response.status === 500){
                        hashHistory.push('/activationlinkexpired');
                    }
                },err => {
                    hashHistory.push('/activationlinkexpired');
                })
        }
    },

    redirectSignup : function () {
        hashHistory.push('/signup');
    }

};

export default signUpUserActions;