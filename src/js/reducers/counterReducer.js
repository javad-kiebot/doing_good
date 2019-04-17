import { INCREMENTCOUNTER } from "../actions/index";

const initialState = {
    count:0
};

// Reducer to add article
const counterReducer = (state=initialState, action) => {
    switch (action.type) {
        case INCREMENTCOUNTER:
            return {count: action.payload + 1};
        default:
            return state;
    }
}

export default counterReducer;