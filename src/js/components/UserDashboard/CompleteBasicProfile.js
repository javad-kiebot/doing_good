import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import {hashHistory} from "react-router";
import {Grid, Row, Col, Container, Form} from 'react-bootstrap'
import doingGoodHero from "../../../assests/images/home/DoingGood_logo_HERO.png";
import "../../../assests/sass/editVolunteerProfile.scss";
import loginActions from "../../actions/loginActions";
import searchPostingActions from "../../actions/searchPostingActions";
import organizationActions from "../../actions/organizationActions";


class CompleteBasicProfile extends Component{
    constructor(props) {
        super(props);
        this.state={
            orgSelected:"Select Org"
        };
        this.props.organizationAction.getAllOrgsAction();
        this.gotosearchpostings=this.gotosearchpostings.bind(this);
        this.onOrgChange=this.onOrgChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    gotosearchpostings (){
        hashHistory.push("/searchposting");
    }

    onOrgChange(event){
        if(event.target.value === "Select Org") {
            this.setState({orgSelected: event.target.value, zipdisabled: false});
        }else{
            this.setState({orgSelected: event.target.value, zipdisabled:true });
        }
    }

    handleSubmit(event){
        console.log("complete profile");
    }
    render(){
        const orgArray= ['Child care','Child care', 'Child care','Child care', 'Child care', 'Child care','Child care'];
        return(
            <div>
            <div className="fullwidth">
                <Container>
                    <Row>
                        <Col><Link to="/landingpage"><img src={doingGoodHero} width="auto" height="70px" className="imgcenter"/></Link></Col>
                        <Col><button className="btn btnPostOrange" onClick={this.gotosearchpostings}><span style={{'fontFamily':'Gotham-Book','fontSize':'16','color':'white'}}>Search Postings</span></button>
                        </Col>
                        <Col><Link to="/editVoluteerProfile" className="current"><span className="textcenter">My Dashboard</span></Link></Col>
                        <Col><Link to= "/login" className="current"><span className="textcenter logoutText">Logout</span></Link></Col>
                    </Row>
                </Container>
                <div className="show-grid orangeBar">
                    <label>DoingGood Member Dashboard</label>
                    <span className="pull-right">
                            <Link to="/editVoluteerProfile" className="White-anchor">
                            <u>Back to Dashboard</u>
                            </Link></span>
                </div>

                <div className="cardwidth row">
                    <div className="col-md-6 col-sm-12">
                        <div className="card w-auto">
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="card w-auto">
                            <div className="card-body">
                                <h5>My Interested Charitable Organization:</h5>
                                <p>Select\Edit Charitable Organization you wish to donate to</p>
                                <div className="form-group m-0">
                                    <select className="form-control" value={this.state.orgSelected} onChange={this.onOrgChange}>
                                        <option>Select Org</option>
                                        {this.props.getAllOrgs.map((org)=>
                                            <option>{org.organizationName}</option>
                                        )}

                                    </select>
                                </div>
                                <button className="btn btn-default goodsAndServicesButton goodsAndServicesButtonRight" onClick={this.handleSubmit} type="button">Save</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        getAllOrgs:state.organizationReducer.getAllOrgs
    };
}

const mapDispatchToProps = dispatch => {
    return {
        organizationAction: bindActionCreators(organizationActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompleteBasicProfile);