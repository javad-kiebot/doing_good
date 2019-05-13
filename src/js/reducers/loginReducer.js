const initialState = {
    email: '',
    password: '',
    session: {user:{}},
    user:{},
    token:'',
    loginUserDetails:{}
};


let loginReducer = function(user = initialState, action) {
    switch (action.type) {

        case 'ONLY_TOKEN':
            return Object.assign({}, user, {token:action.data});

        case 'LOGGED_IN':
            debugger;
            return Object.assign({}, user, {user: action.user,token:action.token,session:action.data});

        case 'UPDATE_LOGGED_IN':
            return Object.assign({}, user, {user: action.data,token:action.token});

        case 'LOAD_LOGIN':
            return Object.assign({}, user, {user: action.data,token:action.token});

        case 'LOG_IN_USER':
            return {...state,loginUserDetails: action.data};

        default:
            return user;
    }
};

export default loginReducer;
