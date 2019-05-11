import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Container, Row, Col} from 'react-bootstrap'
import doingGoodHero from "../../assests/images/home/DoingGood_logo_HERO.png";
import photoIcon from "../../assests/images/dashboard/Photo_icon.png";
import addphotoIcon from "../../assests/images/dashboard/add photo icon.png";
import "../../assests/sass/editVolunteerProfile.scss";
import loginActions from "../actions/loginActions";

class EditVolunteerProfile extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <div className="fullwidth">
                    <Container>
                    <Row>
                        <Col><img src={doingGoodHero} width="auto" height="70px" className="imgcenter"/></Col>
                        <Col><button className="btn btnPostOrange"><span style={{'fontFamily':'Gotham-Book','fontSize':'16','color':'white'}}>Search Postings</span></button>
                        </Col>
                        <Col><a href="#" className="current"><span className="textcenter">My Dashboard</span></a></Col>
                        <Col><a href= "#" className="current"><span className="textcenter">Logout</span></a></Col>
                    </Row>
                    </Container>
                    <Row className="bgWelcomeMessage">
                        <Col md={2}>
                            <div>
                                <label htmlFor="file" className="addphotobtn">
                                    <img src={addphotoIcon} className=""/>
                                </label>
                                <img src={photoIcon} className="pull-right Photo_icon"/>
                                    {/*<input type="file" className="hide" id="file" name="file"/>*/}
                            </div>
                        </Col>
                        <Col md={7}>
                            <h3>Welcome, SOUTHERN ILLINOIS CARBONDALE</h3>
                            <p className="welcomeMessage">You are DoingGood by offering <br/>
                                your time, services and goods.</p>
                        </Col>
                        <Col><h3>Thank you for</h3><img src={doingGoodHero} width="auto" height="70px" className="imgcenter"/></Col>
                    </Row>
                    <Row className="show-grid orangeBar">
                        <Col md={12}>
                            <p >DoingGood Member Dashboard</p>
                            <span className="pull-right">
                            <a href="#">
                            <u>Complete your basic profile</u>
                            </a></span>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return(state);
}

function mapDispatchToProps(dispatch) {
    return {
        memberdashboardactions: bindActionCreators(loginActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditVolunteerProfile);