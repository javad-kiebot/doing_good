import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import SearchPosting from "../components/SearchPosting";
import searchPostingActions from "../actions/searchPostingActions";

class SearchPostingContainer extends Component {
    constructor(props) {
        super(props);
        this.onPostServiceRequestModal=this.onPostServiceRequestModal.bind(this);
    }

    onPostServiceRequestModal(){
        this.props.searchPostingAction.postServiceRequestAction();
    }

    componentWillMount(){
        console.log("sfkjfkhsf" + this.props.showModalFlag);
        Promise.resolve(this.props.searchPostingAction.allPostingServiceAction());
    }

    render() {
        return (
            <div>
                {console.log(this.props.allPostData)}
                {this.props.allPostData && this.props.allPostData.offeredGoodOrService &&
                    <SearchPosting
                        searchPostingAction={this.props.searchPostingAction}
                        onPostServiceRequestModal={this.onPostServiceRequestModal}
                        allPostData={this.props.allPostData}
                        showModalFlag={this.props.showModalFlag}
                        hideModalFlag={this.props.hideModalFlag}
                    />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {showModalFlag: state.postRequestServiceReducer.showModalFlag, allPostData: state.postRequestServiceReducer.allPostData
        };
}

const mapDispatchToProps = dispatch => {
    return {
        searchPostingAction: bindActionCreators(searchPostingActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPostingContainer);

