import React from 'react';
import PropTypes from "prop-types";
import EditPostModal from "../../components/OrganisationDashboard/EditPostModal";

const PostDetails = (props) =>{
    const { post, key, actions } = props;
    const handleOnClick = () => {
      actions.openModal();
      actions.setPostDetails(post);
    };
    return(
    <React.Fragment>
        <li key={ key } className="cardlabel-Opportunities" onClick={handleOnClick} ><span
            className="label-black">{post.description}</span>
            <span className="pull-right label-black"> ${post.rate}/{post.rateType === "PERITEM" ? "item" : "hour"}</span>
        </li>
        <EditPostModal {...props } />
    </React.Fragment>
    )
};

PostDetails.propTypes = {
    post: PropTypes.object,
    key: PropTypes.number,
    actions: PropTypes.object
};

export default PostDetails;

