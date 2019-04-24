import React, { Component } from "react";
import { Link } from 'react-router';
import doingGood from "../../assests/images/home/DoingGood_logo_HERO_RGB.png";
import guitar from "../../assests/images/home/teach_guitar-bright.jpg";
import skateImg from "../../assests/images/search/skateboard_teach-min.jpg";
import teen_girl from "../../assests/images/search/teen_girl_smile_glasses-min.jpg";
import WalkingDog from "../../assests/images/search/WalkingDog-min.jpg";
import kid_teen_babysite from "../../assests/images/search/kid_teen_babysite_window-min.jpg";
import clean_floor from "../../assests/images/search/clean_floor-min.jpg";
import dginsta from "../../assests/images/home/dg-insta.png";
import dgfb from "../../assests/images/home/dg-fb.png";
import dgtwitter from "../../assests/images/home/dg-twitter.png";
import "../../assests/sass/searchPosting.scss";

class SearchPosting extends Component {
    constructor() {
        super();
    }
    render(){
        return(
           <div>
                <div>
                    <img src={ guitar } className="img-fluid" alt="Search banner" />
                </div>
                <div className="dg-search bg-primary px-2 py-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <input className="form-control" type="text" placeholder="Quick Search"/>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <select className="form-control">
                                        <option>Select org</option>
                                        <option>Select org</option>
                                        <option>Select org</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <select className="form-control">
                                        <option>Select org</option>
                                        <option>Select org</option>
                                        <option>Select org</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <select className="form-control">
                                        <option>Select org</option>
                                        <option>Select org</option>
                                        <option>Select org</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group m-0">
                                    <input className="form-control" type="text" placeholder="Zip Code"/>
                                </div>
                            </div>
                            <div className="col-sm">
                                <button className="btn btn-default">Search</button>
                                <button className="btn btn-default">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dg-services mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <img src={ doingGood } alt="logo" width="200" className=""/>
                                <h3 className="content text-info mb-4">Services & Goods</h3>
                                <div className="card bg-light pb-3">
                                    <div className="card-body">
                                        <p className="content text-info font-weight-bold">Did not find what you want?</p>
                                        <a href="#"
                                           className="btn btn-info btn-shadow btn-block text-uppercase py-2 mb-3 font-weight-bold">Post
                                            a work request</a>
                                        <p className="content text-info font-weight-bold">Want to donate your service<br/> or good?</p>
                                        <a href="#"
                                           className="btn btn-primary btn-shadow btn-block text-uppercase py-2 font-weight-bold">Post a
                                            service or good</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card bg-light service-select">
                                    <div className="card-body">
                                        <p className="font-weight-bold text-center">All DoingGood Services & Goods Results and Other
                                            Postings</p>
                                        <ul className="list-inline row">
                                            <li className="list-inline-item col-8 col-sm-7">
                                                <div className="bg-white rounded"><span className="">&bull;</span> Bike for sale</div>
                                            </li>
                                            <li className="list-inline-item col"><a href="javascript:void(0)" data-toggle="modal"
                                                                                    data-target="#postServices"
                                                                                    className="btn btn-primary btn-block font-weight-bold">Select</a>
                                            </li>
                                        </ul>
                                        <ul className="list-inline row">
                                            <li className="list-inline-item col-8 col-sm-7">
                                                <div className="bg-white rounded"><span className="">&bull;</span> Stationary</div>
                                            </li>
                                            <li className="list-inline-item col"><a href="javascript:void(0)" data-toggle="modal"
                                                                                    data-target="#postServices"
                                                                                    className="btn btn-primary btn-block font-weight-bold">Select</a>
                                            </li>
                                        </ul>
                                        <p className="font-weight-bold text-center">Goods and Services Wanted</p>
                                        <ul className="list-inline row">
                                            <li className="list-inline-item col-8 col-sm-7">
                                                <div className="bg-secondary text-white rounded"><span className="">&bull;</span> iPad
                                                </div>
                                            </li>
                                            <li className="list-inline-item col"><a href="javascript:void(0)" data-toggle="modal"
                                                                                    data-target="#postServices"
                                                                                    className="btn btn-info btn-block font-weight-bold">Select</a>
                                            </li>
                                        </ul>
                                        <ul className="list-inline row">
                                            <li className="list-inline-item col-8 col-sm-7">
                                                <div className="bg-secondary text-white rounded"><span className="">&bull;</span> Need
                                                    Painter
                                                </div>
                                            </li>
                                            <li className="list-inline-item col"><a href="javascript:void(0)" data-toggle="modal"
                                                                                    data-target="#postServices"
                                                                                    className="btn btn-info btn-block font-weight-bold">Select</a>
                                            </li>
                                        </ul>
                                        <ul className="list-inline row">
                                            <li className="list-inline-item col-8 col-sm-7">
                                                <div className="bg-secondary text-white rounded"><span className="">&bull;</span> Want a
                                                    babysitter
                                                </div>
                                            </li>
                                            <li className="list-inline-item col"><a href="javascript:void(0)" data-toggle="modal"
                                                                                    data-target="#postServices"
                                                                                    className="btn btn-info btn-block font-weight-bold">Select</a>
                                            </li>
                                        </ul>
                                        <ul className="list-inline row">
                                            <li className="list-inline-item col-8 col-sm-7">
                                                <div className="bg-secondary text-white rounded"><span
                                                    className="">&bull;</span> Babysitter required
                                                </div>
                                            </li>
                                            <li className="list-inline-item col"><a href="javascript:void(0)" data-toggle="modal"
                                                                                    data-target="#postServices"
                                                                                    className="btn btn-info btn-block font-weight-bold">Select</a>
                                            </li>
                                        </ul>
                                        <ul className="list-inline row">
                                            <li className="list-inline-item col-8 col-sm-7">
                                                <div className="bg-secondary text-white rounded"><span className="">&bull;</span> Otis
                                                    looking for painter
                                                </div>
                                            </li>
                                            <li className="list-inline-item col"><a href="javascript:void(0)" data-toggle="modal"
                                                                                    data-target="#postServices"
                                                                                    className="btn btn-info btn-block font-weight-bold">Select</a>
                                            </li>
                                        </ul>
                                        <ul className="list-inline row">
                                            <li className="list-inline-item col-8 col-sm-7">
                                                <div className="bg-secondary text-white rounded"><span className="">&bull;</span> Need
                                                    painter
                                                </div>
                                            </li>
                                            <li className="list-inline-item col"><a href="javascript:void(0)" data-toggle="modal"
                                                                                    data-target="#postServices"
                                                                                    className="btn btn-info btn-block font-weight-bold">Select</a>
                                            </li>
                                        </ul>
                                        <ul className="list-inline row">
                                            <li className="list-inline-item col-8 col-sm-7">
                                                <div className="bg-secondary text-white rounded"><span className="">&bull;</span> Need a
                                                    Mac
                                                </div>
                                            </li>
                                            <li className="list-inline-item col"><a href="javascript:void(0)" data-toggle="modal"
                                                                                    data-target="#postServices"
                                                                                    className="btn btn-info btn-block font-weight-bold">Select</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid dg-slider">
                    <div className="row">
                        <div className="col-sm col-12">
                            <img src={ skateImg } alt="image" className="img-fluid"/>
                        </div>
                        <div className="col-sm col-12">
                            <img src={teen_girl} alt="image" className="img-fluid"/>
                        </div>
                        <div className="col-sm col-12">
                            <img src={WalkingDog} alt="image" className="img-fluid"/>
                        </div>
                        <div className="col-sm col-12">
                            <img src={kid_teen_babysite} alt="image" className="img-fluid"/>
                        </div>
                        <div className="col-sm col-12">
                            <img src={clean_floor} alt="image" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid dg-footer bg-primary py-3">
                    <div className="row">
                        <div className="col-sm-3 col-3 d-flex align-items-center"><a href="#"
                                                                                     className="font-weight-bold text-white">JOIN</a>
                        </div>
                        <div className="col-sm-3 col-4 d-flex align-items-center"><a href="#"
                                                                                     className="font-weight-bold text-white">Login</a>
                        </div>
                        <div className="col-sm-3 col-5 d-flex align-items-center"><a href="#" className="font-weight-bold text-white">About
                            DoingGood</a></div>
                        <div className="col-sm-3 col-12">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item"><a href="#"><img src={dginsta} alt="logo" width="30"/></a>
                                </li>
                                <li className="list-inline-item"><a href="#"><img src={dgfb} alt="logo" width="30"/></a></li>
                                <li className="list-inline-item"><a href="#"><img src={dgtwitter} alt="logo" width="30"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="postServices" className="modal fade" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Show Interest</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className="font-weight-bold">Post Details</p>
                                <p>Goods/Service:bike for sale</p>
                                <p>Description:Mens bike for sale, comfort bike. </p>
                                <p>Rate:</p>
                                <p>Rate Type:perhour</p>
                                <p>Please <Link to="/">Login</Link> to Continue.</p>
                                <p></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
    );
    }
    }
export default SearchPosting;