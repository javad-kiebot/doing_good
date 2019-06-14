import axios from "axios";
import {toastr} from "react-redux-toastr";

export const POSTBYUSERID = 'POSTBYUSERID';

const memberdashboardActions = {
    allPostingByUserIdAction: function(userId) {
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'https://13.127.249.79:9500/api/posting/all-posts-by-userid',
            data: {
                "id": userId
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {
                        dispatch({
                            type: 'POSTBYUSERID',
                            data: response.data
                        });
                    }
                }, err => {
                    if (err.response.data.status === 400) {
                        toastr.error('Error ', 'Error occured');
                    }
                })
        }
    },

    updatePostsByUserAction: function(goodsOrServicesSelected,
                                      goods,
                                      description,
                                      rate,
                                      minimum,
                                      maximum,
                                      rateType,
                                      postType,
                                      upId,
                                      id) {
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'https://13.127.249.79:9500/api/posting/update',
            data: {
                "description":description,
                "goodOrService":goodsOrServicesSelected,
                "minimum": parseInt(minimum, 10),
                "maximum":parseInt(maximum, 10),
                "rate": parseInt(rate, 10),
                "rateType":rateType,
                "postType":postType,
                "upId": upId,
                "id": id
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {
                        dispatch({
                            type: 'UPDATEPOSTBYUSER',
                            // data: response.data
                        });
                        toastr.success('', 'Successfully updated the post');
                    }
                },err =>{
                    if(err.response.data.status === 400){
                        toastr.error('Error ', 'You cannot update the post');
                    }
                })
        }
    },

    updateMemberUserAction: function(firstName,
                                     lastName,
                                     address,
                                     city,
                                     state,
                                     aboutMe,
                                     phoneNumber,
                                     emailId,
                                     zipCode,
                                     id) {
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'https://13.127.249.79:9500/api/member/memberUpdate',
            data: {
                "aboutMe": aboutMe,
                "address1": address,
                "address2": address,
                "city": city,
                "firstName": firstName,
                "id": id,
                "lastName": lastName,
                "phone": phoneNumber,
                "state": state,
                "user": {
                    "profileEmail": emailId,
                    "profileId": id
                },
                "zipCode": zipCode
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {
                        dispatch({
                            type: 'MEMBERUPDATEBYUSER',
                            // data: response.data
                        });
                        toastr.success('', 'Successfully updated the user');
                    }
                },err =>{
                    if(err.response.data.status === 400){
                        toastr.error('Error ', 'You cannot update the user');
                    }
                })
        }
    },

    updatePostOnAgreedPrice: function(interestedMemberId,postId, offerPrice) {
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'https://13.127.249.79:9500/api/posting/updatePostStatus',
            data: {
                "interestedMemberId": interestedMemberId,
                "offerPrice": offerPrice,
                "postId": postId,
                "status": "PRODUCER_SIGNOFF"
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return (dispatch) => {
            axios(request)
                .then(response => {
                    if (response.status === 200) {
                        dispatch({
                            type: 'UPDATEPOSTONAGREEDPRICE',
                            // data: response.data
                        });
                        toastr.success('', 'Successfully updated the post');
                    }
                },err =>{
                    if(err.response.data.status === 400){
                        toastr.error('Error ', 'You cannot update the post');
                    }
                })
        }
    }
};

export default memberdashboardActions;