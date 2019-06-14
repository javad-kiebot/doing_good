import React from 'react';
import PropTypes from 'prop-types';
import PostDetails from './PostDetails';

const EditPendingPosts= (props) => {
    const { allPostDataById } = props;
    return(
        <React.Fragment>
            <div className="card w-auto">
                <div className="card-body">
                    <h5 className="cardtitle">Pending Postings</h5>
                    {allPostDataById && allPostDataById.offeredGoodOrService.map((post, index) =>
                        post.status === "PENDING_PRODUCER_SIGNOFF" &&
                            <PostDetails key={index} post={ post }/>
                    )
                    }
                    {allPostDataById && allPostDataById.wantedGoodOrService.map((post, index) =>
                        post.status === "PENDING_PRODUCER_SIGNOFF" &&
                            <PostDetails key={index} post={ post }/>
                    )
                    }
                </div>
            </div>
        </React.Fragment>

    )
};

EditPendingPosts.propTypes = {
    allPostDataById: PropTypes.object
};

export default EditPendingPosts;