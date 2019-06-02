import {POSTBYUSERID} from "../actions/memberdashboardActions";

const initialState = {
    allPostDataByUserId: null
};

const memberDashboardReducer = (state=initialState, action) => {
    switch (action.type) {
        case POSTBYUSERID:
            return {...state,allPostDataByUserId: action.data};
        default:
            return state;
    }
};

export default memberDashboardReducer;