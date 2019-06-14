import React from 'react';
import PropTypes from 'prop-types';
import PostDetails from './PostDetails';

const EditNewPosts= (props) => {
    const { allPostDataById } = props;
    return(
        <React.Fragment>
            <div className="card w-auto">
                <div className="card-body">
                    <h5 className="cardtitle">Our Organization's Help Wanted Postings</h5>
                    {allPostDataById && allPostDataById.offeredGoodOrService.map((post, index) =>
                        post.status === "NEW" &&
                        <PostDetails key={index} post={ post }/>
                    )
                    }
                    {allPostDataById && allPostDataById.wantedGoodOrService.map((post, index) =>
                        post.status === "NEW" &&
                        <PostDetails key={index} post={ post }/>
                    )
                    }
                </div>
            </div>
        </React.Fragment>

    )
};

EditNewPosts.propTypes = {
    allPostDataById: PropTypes.object
};

export default EditNewPosts;