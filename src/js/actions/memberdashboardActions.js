import axios from "axios";
import {toastr} from "react-redux-toastr";

export const POSTBYUSERID = 'POSTBYUSERID';

const memberdashboardActions = {
    allPostingByUserIdAction: function(userId) {
        const request = {
            method: 'post',
            responseType: 'json',
            url: 'http://13.127.249.79:9500/api/posting/all-posts-by-userid',
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
                },err =>{
                    if(err.response.data.status === 400){
                        toastr.error('Error ', 'Error occured');
                    }
                })
        }
    }
};

export default memberdashboardActions;