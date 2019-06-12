import React, {Component} from "react";
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {hashHistory} from "react-router";
import Header from "../components/OrganisationDashboard/Header";
// import Dashboard from "../components/OrganisationDashboard/Dashboard";
import EditOrganizationProfile from "../components/OrganisationDashboard/EditOrganizationProfile";
import EditPendingPosts from "../components/OrganisationDashboard/EditPendingPosts";
import memberDashboardActions from "../actions/memberdashboardActions";
import searchPostingActions from "../actions/searchPostingActions";
import Footer from "../components/OrganisationDashboard/Footer";


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
         const { allPostDataById } = this.props;
         return(
             <div className="fullwidth">
                <Header { ...this.props } gotoSearchPostings={this.gotoSearchPostings}/>
                <EditOrganizationProfile
                    { ...this.props }
                />
                <EditPendingPosts allPostDataById={ allPostDataById } />
                <Footer />
                {/*<Dashboard/>*/}
            </div>
         )}
 }

function mapStateToProps(state){
    return{
        organization:state.loginReducer.session,
        allPostDataById:state.memberDashboardReducer.allPostDataByUserId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({
            ...memberDashboardActions,
            ...searchPostingActions
        }, dispatch)
    }
}

OrganizationDashboardContainer.propTypes = {
    allPostDataById: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationDashboardContainer);
