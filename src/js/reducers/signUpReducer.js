const initialState = {
    firstName:'',
    lastName:'',
    cell:'',
    email:'',
    password: '',

    session: {}
};

let signupReducer = function(user = initialState, action) {
    switch (action.type) {
        case 'SIGNUP':
            return Object.assign({}, user, {session: action.data});

        default:
            return user;
    }
};

export default signupReducer;
