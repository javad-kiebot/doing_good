import {POSTSERVICEREQUEST, POSTSERVICEREQUESTCLOSE} from "../actions/searchPostingActions";

const initialState = {
    showModalFlag:false,
    hideModalFlag:true
};

const postRequestServiceReducer = (state=initialState, action) => {
    switch (action.type) {
        case POSTSERVICEREQUEST:
            return {showModalFlag: true};
            case POSTSERVICEREQUESTCLOSE:
            return {hideModalFlag: false};
        default:
            return state;
    }
};

export default postRequestServiceReducer;