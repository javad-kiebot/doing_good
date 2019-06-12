import React from 'react';
import PropTypes from 'prop-types';
import PostDetails from './PostDetails';

const EditPendingPosts= (props) => {
    const { allPostDataById } = props;
    return(
        <React.Fragment>
            <div className="col-md-8 col-sm-12">
                <div className="card w-auto">
                    <div className="card-body">
                        <h5 className="cardtitle">Our Organization's Help Wanted Postings</h5>
                        {allPostDataById && allPostDataById.offeredGoodOrService.map((post, index) =>
                            post.status === "NEW" &&
                                <PostDetails key={index} post={ post }/>
                        )
                        }
                        {/*{this.props.allPostDataByUserId && this.props.allPostDataByUserId.wantedGoodOrService.map((allPostsByUser) =>*/}
                            {/*allPostsByUser.status === "ACCEPTED" ?*/}
                                {/*<li className="cardlabel-Opportunities"><span*/}
                                    {/*className="label-black">{allPostsByUser.description}</span>*/}
                                    {/*<span className="pull-right label-black"> ${allPostsByUser.rate}/{allPostsByUser.rateType === "PERITEM" ? "item" : "hour"}</span>*/}
                                {/*</li>: null                                )*/}
                        {/*}*/}
                    </div>
                {/*</div>*/}
                {/*<div className="card w-auto">*/}
                    {/*<div className="card-body">*/}
                        {/*<h5 className="cardtitle">My POSTS</h5>*/}
                        {/*{this.props.allPostDataByUserId && this.props.allPostDataByUserId.offeredGoodOrService.map((allPostsByUser ,index) =>*/}
                            {/*<li className="cardlabel-Opportunities" id={`userPost_ ${index}`} onClick={this.handlePostbyUserModal}>*/}
                                {/*<span className="label-black" id={`descriptionUserPost_ ${index}`}>{allPostsByUser.description}</span>*/}
                                {/*<span className="pull-right label-black" id={`rateUserPost_ ${index}`}> ${allPostsByUser.rate}/{allPostsByUser.rateType === "PERITEM" ? "item" : "hour"}</span>*/}
                            {/*</li>*/}
                        {/*)*/}
                        {/*}*/}
                        {/*{this.props.allPostDataByUserId && this.props.allPostDataByUserId.wantedGoodOrService.map((allPostsByUser, index) =>*/}
                            {/*<li className="cardlabel-Opportunities" id={`wantedUserPost_ ${index}`} onClick ={this.handleWantedPostbyUserModal}>*/}
                                {/*<span className="label-black" id={`wantedDescriptionUserPost_ ${index}`}>{allPostsByUser.description}</span>*/}
                                {/*<span className="pull-right label-black" id={`wantedRateUserPost_ ${index}`}> ${ allPostsByUser.rate }/{ allPostsByUser.rateType === "PERITEM" ? "item" : "hour" }</span>*/}
                            {/*</li>*/}
                        {/*)*/}
                        {/*}*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="card w-auto">*/}
                    {/*<div className="card-body">*/}
                        {/*<h5 className="cardtitle">My PENDING Volunteering Opportunities/Purchased Goods</h5>*/}
                        {/*{this.props.allPostDataByUserId && this.props.allPostDataByUserId.offeredGoodOrService.map((allPostsByUser,index) =>*/}
                            {/*allPostsByUser.status === "PENDING" ?*/}
                                {/*<li className="cardlabel-Opportunities" id={`pendingPosts_ ${index}`} onClick={this.handlePendingPosts}>*/}
                                    {/*<span className="label-black" id={`pendingPostsDes_ ${index}`}>{allPostsByUser.description}</span>*/}
                                    {/*<span className="pull-right label-black" id={`pendingPostsRate_ ${index}`}> ${allPostsByUser.rate}/{allPostsByUser.rateType === "PERITEM" ? "item" : "hour"}</span>*/}
                                {/*</li>: null*/}
                        {/*)*/}
                        {/*}*/}
                        {/*{this.props.allPostDataByUserId && this.props.allPostDataByUserId.wantedGoodOrService.map((allPostsByUser, index) =>*/}
                            {/*allPostsByUser.status === "PENDING" ?*/}
                                {/*<li className="cardlabel-Opportunities" id={`pendingPostsWanted_ ${index}`} onClick={this.handleWantedPendingPosts}><span*/}
                                    {/*className="label-black" id={`pendingPostswantedDes_ ${index}`}>{allPostsByUser.description}</span>*/}
                                    {/*<span className="pull-right label-black" id={`pendingPostsRate_ ${index}`}> ${allPostsByUser.rate}/{allPostsByUser.rateType === "PERITEM" ? "item" : "hour"}</span>*/}
                                {/*</li>: null*/}
                        {/*)*/}
                        {/*}*/}
                    {/*</div>*/}
                </div>
            </div>
        </React.Fragment>

    )
};

EditPendingPosts.propTypes = {
    allPostDataById: PropTypes.object
};

export default EditPendingPosts;