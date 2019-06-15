import ReactModal from "react-modal";
import React from "react";
import { Form, Button } from 'react-bootstrap'
// import { Form, Button } from "react-bootstrap";


class EditUserProfile extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: props.session.firstName,
            lastName:props.session.lastName,
            address:props.session.address1,
            stateName:props.session.state,
            city:props.session.city,
            aboutMe:props.session.aboutMe,
            phoneNumber:props.session.phoneNumber,
            emailId:props.session.email,
            zipcode: props.session.zipcode
        };
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeZipcode = this.changeZipcode.bind(this);
        this.changeAboutMe = this.changeAboutMe.bind(this);
        this.changePhoneNumber = this.changePhoneNumber.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changeCity = this.changeCity.bind(this);
    }

    handleSubmit(event){
        this.props.memberdashboardactions.updateMemberUserAction(
            this.state.firstName,
            this.state.lastName,
            this.state.address,
            this.state.city,
            this.state.stateName,
            this.state.aboutMe,
            this.state.phoneNumber,
            this.state.emailId,
            this.state.zipcode,
            this.props.session.id
        );
        this.props.handleCloseModal();
    }

    changeFirstName(event){
        this.setState({ firstName:event.target.value})
    }
    changeLastName(event){
        this.setState({ lastName:event.target.value})
    }
    changeAddress(event){
        this.setState({ address:event.target.value})
    }
    changeZipcode(event){
        this.setState({ zipcode:event.target.value})
    }
    changeAboutMe(event){
        this.setState({ aboutMe:event.target.value})
    }
    changePhoneNumber(event){
        this.setState({ phoneNumber:event.target.value})
    }
    changeEmail(event){
        this.setState({ emailId:event.target.value})
    }
    changeState(event){
        this.setState({ stateName:event.target.value})
    }
    changeCity(event){
        this.setState({ city:event.target.value})
    }

    render () {
        const customStyles = {
            content : {
                top                   : '5%',
                left                  : '20%',
                right                 : '20%',
                bottom                : 'auto',
                height: '90%',
                overlfow: 'scroll'
            }
        };
        return (
            <ReactModal
                isOpen={this.props.showModal}
                contentLabel="Minimal Modal Example"
                style={customStyles}
            >
                <h4 id="contained-modal-title" className="modal-title">Edit User Profile</h4>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label >First name</Form.Label>
                        <Form.Control type="text" onChange={this.changeFirstName} defaultValue={this.props.session.firstName} />
                        <Form.Label >Last name</Form.Label>
                        <Form.Control type="text" onChange={this.changeLastName} defaultValue={this.props.session.lastName} />
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" onChange={this.changeAddress} defaultValue={`${this.props.session.address1}, ${this.props.session.address2}`}/>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" onChange={this.changeCity} defaultValue={this.props.session.city}/>
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" onChange={this.changeState} defaultValue={this.props.session.state}/>
                        <Form.Label>Zip code</Form.Label>
                        <Form.Control type="text" onChange={this.changeZipcode} defaultValue={this.props.session.zipcode}/>
                        <Form.Label>About Me</Form.Label>
                        <Form.Control type="text" onChange={this.changeAboutMe} defaultValue={this.props.session.aboutme}/>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" onChange={this.changePhoneNumber} defaultValue={this.props.session.phoneNumber}/>
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control type="text" onChange={this.changeEmail} defaultValue={this.props.session.email}/>
                    </Form.Group>
                    <button className="btn btn-default goodsAndServicesButton goodsAndServicesButtonRight" onClick={this.handleSubmit} type="button">Save</button>
                    <button className="btn btn-default goodsAndServicesButton" onClick={this.props.handleCloseModal}>Close</button>

                </Form>
            </ReactModal>
        );
    }
}

const props = {};

export default EditUserProfile;