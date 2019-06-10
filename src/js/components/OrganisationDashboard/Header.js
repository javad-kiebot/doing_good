import React from 'react';
import { Link } from 'react-router';
import {Col, Container, Row} from "react-bootstrap";
import doingGoodHero from "../../../assests/images/home/DoingGood_logo_HERO.png";
import addPhotoIcon from "../../../assests/images/dashboard/add photo icon.png";
import photoIcon from "../../../assests/images/dashboard/Photo_icon.png";

const Header = (props) => {
    const { gotoSearchPostings } = props;
    return(
        <React.Fragment>
            <Container>
                <Row>
                    <Col><Link to="/landingpage"><img src={doingGoodHero} width="auto" height="70px" className="imgcenter"/></Link></Col>
                    <Col><button className="btn btnPostOrange" onClick={gotoSearchPostings}><span style={{'fontFamily':'Gotham-Book','fontSize':'16','color':'white'}}>Search Postings</span></button>
                    </Col>
                    <Col><Link to="/editVoluteerProfile" className="current"><span className="textcenter">My Dashboard</span></Link></Col>
                    <Col><Link to= "/login" className="current"><span className="textcenter logoutText">Logout</span></Link></Col>
                </Row>
            </Container>
            <Row className="bgWelcomeMessage">
                <Col md={1}>
                </Col>
                <Col md={1}>
                    <label htmlFor="file" className="addphotobtn">
                        <img src={addPhotoIcon} className=""/>
                    </label>
                    <img src={photoIcon} className="Photo_icon"/>
                    {/*<input type="file" className="hide" id="file" name="file"/>*/}
                </Col>
                <Col md={7}>
                    <h3>Welcome, SOUTHERN ILLINOIS CARBONDALE</h3>
                    <p className="welcomeMessage">You are DoingGood by offering <br/>
                        your time, services and goods.</p>
                </Col>
                <Col>
                    <h3>Thank you for</h3>
                    <img src={doingGoodHero} width="auto" height="70px" className="imgcenter"/>
                </Col>
            </Row>
            <div className="show-grid orangeBar">
                <label>DoingGood Member Dashboard</label>
                <span className="pull-right">
                    <Link to="/completebasicprofile" className="White-anchor">
                        <u>Complete your basic profile</u>
                    </Link>
                </span>
            </div>
        </React.Fragment>
    );
};

export default Header;
