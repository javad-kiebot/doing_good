import React from 'react';
import PropTypes from "prop-types";

const PostDetails = (props) =>{
    const { post, key } = props;
    return(
    <React.Fragment>
        <li key={ key } className="cardlabel-Opportunities"><span
            className="label-black">{post.description}</span>
            <span className="pull-right label-black"> ${post.rate}/{post.rateType === "PERITEM" ? "item" : "hour"}</span>
        </li>
    </React.Fragment>
    )
};

PostDetails.propTypes = {
    post: PropTypes.object,
    key: PropTypes.number
};

export default PostDetails;

