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
        case 'LOGOUT_USER':
            return {state:undefined};

        default:
            return user;
    }
};

export default signupReducer;
