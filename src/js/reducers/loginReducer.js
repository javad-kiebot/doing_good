const initialState = {
    email: '',
    password: '',
    session: {user:{}},
    user:{},
    token:''
};


let loginReducer = function(user = initialState, action) {
    switch (action.type) {

        case 'ONLY_TOKEN':
            return Object.assign({}, user, {token:action.data});

        case 'LOGGED_IN':
            return Object.assign({}, user, {user: action.user,token:action.token,session:action.data});

        case 'UPDATE_LOGGED_IN':
            return Object.assign({}, user, {user: action.data,token:action.token});

        case 'LOAD_LOGIN':
            return Object.assign({}, user, {user: action.data,token:action.token});

        default:
            return user;
    }
};

export default loginReducer;
