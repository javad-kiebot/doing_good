import {ALLORGANIZATION} from "../actions/organizationActions";

const initialState = {
   getAllOrgs: []
};

const organizationReducer = (state=initialState, action) => {
    switch (action.type) {
        case ALLORGANIZATION:
            return {...state,getAllOrgs: action.data};
        default:
            return state;
    }
};

export default organizationReducer;