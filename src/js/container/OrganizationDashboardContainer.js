import React, {Component} from "react";
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {hashHistory} from "react-router";
import Header from "../components/OrganisationDashboard/Header";
// import Dashboard from "../components/OrganisationDashboard/Dashboard";
import EditOrganizationProfile from "../components/OrganisationDashboard/EditOrganizationProfile";
import EditPendingPosts from "../components/OrganisationDashboard/EditPendingPosts";
import EditAcceptedPosts from "../components/OrganisationDashboard/EditAcceptedPosts";
import EditNewPosts from "../components/OrganisationDashboard/EditNewPosts";
import Footer from "../components/OrganisationDashboard/Footer";
import memberDashboardActions from "../actions/memberdashboardActions";
import searchPostingActions from "../actions/searchPostingActions";
import organizationDashboardActions from "../actions/organizationDashboardActions";
import EditPostModal from "../components/OrganisationDashboard/EditPostModal";
import PostNewServiceOrWantedServiceButtons
    from "../components/OrganisationDashboard/PostNewServiceOrWantedServiceButtons";


 class OrganizationDashboardContainer extends Component {
     constructor(props) {
         super(props);
         this.gotoSearchPostings=this.gotoSearchPostings.bind(this);
     }

     componentWillMount() {
         this.props.organization.id &&
         this.props.actions.allPostingByUserIdAction(this.props.organization.id);
     }

     gotoSearchPostings (){
         hashHistory.push("/searchposting");
         hashHistory.push("/searchposting");

     }

     render() {
         const { actions, postDetails } = this.props;
         return(
             <div className="fullwidth">
                <Header { ...this.props } gotoSearchPostings={this.gotoSearchPostings}/>
                 <div className="cardwidth row">
                     <EditOrganizationProfile { ...this.props } />
                     <div className="col-md-8 col-sm-12">
                         <EditAcceptedPosts { ...this.props } postDetails={ postDetails ? postDetails:{}} />
                         <EditNewPosts { ...this.props } postDetails={ postDetails ? postDetails:{}} />
                         <EditPendingPosts { ...this.props } postDetails={ postDetails ? postDetails:{}} />
                     </div>
                </div>
                 <PostNewServiceOrWantedServiceButtons actions={actions} />
                <Footer />
            </div>
         )}
 }

function mapStateToProps(state){
    return{
        organization:state.loginReducer.session,
        allPostDataById:state.memberDashboardReducer.allPostDataByUserId,
        isModalOpen: state.organizationDashboardReducer.isModalOpen,
        modalValues: state.organizationDashboardReducer,
        postDetails: state.organizationDashboardReducer.postDetails
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({
            ...memberDashboardActions,
            ...searchPostingActions,
            ...organizationDashboardActions
        }, dispatch)
    }
}

OrganizationDashboardContainer.propTypes = {
    allPostDataById: PropTypes.object,
    actions: PropTypes.object,
    isModalOpen: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationDashboardContainer);
