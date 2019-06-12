import React from 'react';
import { Link } from 'react-router';
import {Col, Container, Row} from "react-bootstrap";
import doingGoodHero from "../../../assests/images/home/DoingGood_logo_HERO.png";
import addPhotoIcon from "../../../assests/images/dashboard/add photo icon.png";

const Header = (props) => {
    const { organization,gotoSearchPostings } = props;
    return(
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={1}><button className="btn btnPostOrange" onClick={gotoSearchPostings}><span style={{'fontFamily':'Gotham-Book','fontSize':'16','color':'white'}}>Search Postings</span></button></Col>
                </Row>
                <Row>
                    <Col><Link to="/landingpage"><img src={doingGoodHero} width="auto" height="70px" className="imgcenter"/></Link></Col>
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
                    {/*<input type="file" className="hide" id="file" name="file"/>*/}
                </Col>
                <Col md={7}>
                    <h3>Welcome, {organization.organizationName}</h3>
                </Col>
                <Col>
                    <img src={doingGoodHero} width="auto" height="70px" className="imgcenter"/>
                </Col>
            </Row>
            <div className="show-grid blueBar">
                <label>DoingGood Organization Dashboard</label>
            </div>
        </React.Fragment>
    );
};

export default Header;
