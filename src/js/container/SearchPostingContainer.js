import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import {bindActionCreators} from "redux";
import loginActions from "../actions/loginActions";
import SearchPosting from "../components/SearchPosting";

class SearchPostingContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <SearchPosting/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        token:state.loginReducer.token,
        user: state.loginReducer.user,
        // WorkRequests:state.landingpage.WorkRequests,
        // loadInterestShownWRData:state.landingpage.loadInterestShownWRData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginAction: bindActionCreators(loginActions, dispatch),
        // landingpageactions:bindActionCreators(landingpageactions,dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPostingContainer);

