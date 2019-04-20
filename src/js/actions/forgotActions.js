import axios from 'axios';
import {browserHistory} from 'react-router';
import {toastr} from 'react-redux-toastr'

let forgotActions = {
    resetpassword: function(userDetails) {

        const request = {
            method: 'post',
            responseType: 'json',
            url: '/api/resetpassword',
            data: {
                "otp" : userDetails.otp ,
                "email" : userDetails.email,
                "newpassword" : userDetails.cpassword
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {
                        toastr.success('', 'Password updated successfully');
                        // window.localStorage.setItem("sessionUser",null);
                        browserHistory.push('/');
                    }
                },err =>{
                    //    console.log(JSON.stringify(err,null,4));
                    if(err.response.data.status === 400){
                        toastr.error('Error ', 'OTP is expired.You cannot reset password');
                    }

                })
        }
    },

    redirectLogin : function () {
        browserHistory.push('/login');
    },

    forgotPassword : function (credentails) {
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'https://gamma.valueaddsofttech.com:4000/api/forgotpassword',
            data: {
                "email" : credentails.email,
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {
                        toastr.success('', 'Email sent to registered email address please check it')
                    }
                },err=>{
                    if(err.response.data.status === 400){
                        toastr.error('Error', 'Email not found')
                    }
                })
        }
    }
};

export default forgotActions;