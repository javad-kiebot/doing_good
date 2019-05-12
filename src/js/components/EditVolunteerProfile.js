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
                        <Col md={1}>
                        </Col>
                        <Col md={1}>

                                <label htmlFor="file" className="addphotobtn">
                                    <img src={addphotoIcon} className=""/>
                                </label>
                                <img src={photoIcon} className="Photo_icon"/>
                                    {/*<input type="file" className="hide" id="file" name="file"/>*/}

                        </Col>
                        <Col md={7}>
                            <h3>Welcome, SOUTHERN ILLINOIS CARBONDALE</h3>
                            <p className="welcomeMessage">You are DoingGood by offering <br/>
                                your time, services and goods.</p>
                        </Col>
                        <Col><h3>Thank you for</h3><img src={doingGoodHero} width="auto" height="70px" className="imgcenter"/></Col>
                    </Row>
                </div>


                <div className="show-grid orangeBar">
                    <label>DoingGood Member Dashboard</label>
                    <span className="pull-right">
                            <a href="#" className="White-anchor">
                            <u>Complete your basic profile</u>
                            </a></span>
                </div>
                {/*
                    Card Readers Starts
                */}
                <div className="cardwidth row">
                    <div className="col-md-4 col-sm-12">
                        <div className="card w-auto">
                            <div className="card-body">
                                <ul className="nobullet">
                                    <li className="cardlabel-Orange">About ME <span className="pull-right"><a href="#">Edit</a></span></li>
                                    <li className="cardlabel">SOUTHERN ILLINOIS</li>
                                    <li className="cardlabel">CARBONDALE</li>
                                    <li className="cardlabel">Zipcode</li>
                                    <li className="cardlabel">About Me</li>
                                    <li className="cardlabel">Phone Number</li>
                                    <li className="cardlabel">dgtest36@mailinator.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card w-auto">
                            <div className="card-body">
                                <h5 className="cardtitle">My Interested Charitable Organizations</h5>
                            </div>
                        </div>
                        <div className="card w-auto">
                            <div className="card-body">
                                <h5 className="cardtitle">My Doing Good Success</h5>
                                <ul className="nobullet">
                                <li className="cardLabel-raised">$$$ RAISED (to date)<span className="span-raised"> $0</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <div className="card w-auto">
                            <div className="card-body">
                                <h5 className="cardtitle">My accepted Volunteering Opportunities/purchased goods</h5>
                                <li className="cardlabel-Opportunities"><span className="label-black">Science Tutor </span><span className="pull-right label-black"> $20/hour</span></li>
                                <li className="cardlabel-Opportunities"><span className="label-black">I Want English Tutor </span><span className="pull-right label-black"> $15/hour</span></li>
                                <li className="cardlabel-Opportunities"><span className="label-black">Math Tutor </span><span className="pull-right label-black"> $20/hour</span></li>
                            </div>
                        </div>
                        <div className="card w-auto">
                            <div className="card-body">
                                <h5 className="cardtitle">My POSTS</h5>
                                <li className="cardlabel-Opportunities"><span className="label-black">trtrtr </span><span className="pull-right label-black"> $20/hour</span></li>
                                <li className="cardlabel-Opportunities"><span className="label-black"> </span><span className="pull-right label-black"> $/hour</span></li>
                                <li className="cardlabel-Opportunities"><span className="label-black"> </span><span className="pull-right label-black"> $/hour</span></li>
                                {/*<li className="cardlabel-Opportunities"><span className="label-black"> </span><span className="pull-right label-black"> $/hour</span></li>*/}
                                {/*<li className="cardlabel-Opportunities"><span className="label-black"> </span><span className="pull-right label-black"> $/hour</span></li>*/}
                                {/*<li className="cardlabel-Opportunities"><span className="label-black"> </span><span className="pull-right label-black"> $/hour</span></li>*/}
                            </div>
                        </div>
                        <div className="card w-auto">
                            <div className="card-body">
                                <h5 className="cardtitle">My PENDING Volunteering Opportunities/Purchased Goods</h5>
                                <li className="cardlabel-Opportunities"><span className="label-black">Science Tutor </span><span className="pull-right label-black"> $20/hour</span></li>
                            </div>
                        </div>
                    </div>
                </div>
                {/*
                    Post Buttons
                */}
                <div class="container cardwidth-button">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <button className="btn btn-primary buttonShadow">
                                POST YOUR NEW<br></br>
                                SERVICES OR GOODS TO DONATE
                            </button>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <button className="btn btn-info buttonShadow button-pupple">
                                POST A WANTED<br></br>
                                SERVICES OR GOODS TO PURCHASE
                            </button>
                        </div>
                    </div>
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