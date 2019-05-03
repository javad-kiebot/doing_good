import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import SearchPosting from "../components/SearchPosting";
import action from "../actions/searchPostingActions";

class SearchPostingContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <SearchPosting
                   showModalFlag={this.props.showModalFlag}
                   hideModalFlag={this.props.hideModalFlag}
                   actions={this.props.actions}
               />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {state};
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(...action, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPostingContainer);

