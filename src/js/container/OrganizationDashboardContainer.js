import React, {Component} from "react";
import Header from "../components/OrganisationDashboard/Header";
import Dashboard from "../components/OrganisationDashboard/Dashboard";
import {bindActionCreators} from "redux";
import memberdashboardActions from "../actions/memberdashboardActions";
import searchPostingActions from "../actions/searchPostingActions";
import {connect} from "react-redux";
import EditOrganizationProfile from "../components/OrganisationDashboard/EditOrganizationProfile";
import {hashHistory} from "react-router";


 class organizationDashboardContainer extends Component {
     constructor(props) {
         super(props);
         this.gotoSearchPostings=this.gotoSearchPostings.bind(this);
     }

     gotoSearchPostings (){
         hashHistory.push("/searchposting");
     }
     render() {
         return(
             <div className="fullwidth">
                <Header gotoSearchPostings={this.gotoSearchPostings}/>
                <EditOrganizationProfile
                    { ...this.props }
                />
                <Dashboard/>
            </div>
         )}
 }

function mapStateToProps(state){
    return{
        session:state.loginReducer.session,
        allPostDataByUserId:state.memberDashboardReducer.allPostDataByUserId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        memberdashboardactions: bindActionCreators(memberdashboardActions, dispatch),
        searchPostingAction: bindActionCreators(searchPostingActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(organizationDashboardContainer);
