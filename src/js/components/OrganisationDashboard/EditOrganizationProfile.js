import React from 'react';

const EditOrganizationProfile = (props) =>{
    return(
        <div className="col-md-4 col-sm-12">
            <div className="card w-auto">
                <div className="card-body">
                    <ul className="nobullet">
                        <li className="cardlabel-Orange">About ME <span className="pull-right"><a>Edit</a></span></li>{/*Need to write click event*/}
                        <li className="cardlabel">{props.session.firstName} {props.session.lastName}</li>
                        <li className="cardlabel">{props.session.address1}, {props.session.address2}, {props.session.city}, {props.session.state}</li>
                        <li className="cardlabel">{props.session.zipcode}</li>
                        <li className="cardlabel">{props.session.aboutme}</li>
                        <li className="cardlabel">{props.session.phoneNumber}</li>
                        <li className="cardlabel">{props.session.email}</li>
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
    )
};

export default EditOrganizationProfile;
