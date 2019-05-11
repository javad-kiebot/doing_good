import {POSTSERVICEREQUEST, POSTSERVICEREQUESTCLOSE, ALLSERVICEREQUEST} from "../actions/searchPostingActions";

const initialState = {
    showModalFlag:false,
    hideModalFlag:true,
    allPostData: {}
};

const postRequestServiceReducer = (state=initialState, action) => {
    switch (action.type) {
        case POSTSERVICEREQUEST:
            return {...state,showModalFlag: true};
            case POSTSERVICEREQUESTCLOSE:
            return {...state,hideModalFlag: false};
            case ALLSERVICEREQUEST:
            return {...state,allPostData: action.data};
        default:
            return state;
    }
};

export default postRequestServiceReducer;