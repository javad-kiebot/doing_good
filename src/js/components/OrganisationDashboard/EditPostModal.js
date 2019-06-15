import React from 'react';
import ReactModal from "react-modal";
import {Form} from "react-bootstrap";

const EditPostModal=(props)=>{
    const { actions, modalValues, organization } = props;
    const customStyles = {
        content : {
            top                   : '5%',
            left                  : '20%',
            right                 : '20%',
            bottom                : 'auto',
            height                : '90%',
            overflowY             : 'scroll'
        }
    };
    const handleCloseModal = () => {
        actions.allPostingByUserIdAction(organization.id);
        actions.closeModal();
    };
    const handleSave = () => {
        actions.updatePostsByUserAction(modalValues.isGoodOrServiceSelected,
            modalValues.goodOrService,
            modalValues.description,
            modalValues.rate,
            modalValues.minimumAmount,
            modalValues.maximumAmount,
            modalValues.rateType,
            null,
            null,
            null)
    };
    return(
        <ReactModal
            isOpen={props.isModalOpen}
            style={customStyles}
        >
            <h4 id="contained-modal-title" className="modal-title">Edit Post</h4>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="skill-text">Services/Goods Required</Form.Label>
                    <div>
                        <input className="goodsAndServices" type="radio" value="GOOD" name="goodRequired"
                               onChange={(e) => actions.setGoodOrServiceSelected(e.target.value)}/>Goods
                        <input className="goodsAndServices" type="radio" value="SERVICE" name="goodRequired"
                               onChange={(e) => actions.setGoodOrServiceSelected(e.target.value)}/>Services
                    </div>
                    <Form.Label>Goods/Service:</Form.Label>
                    <input className='form-control' type="text" onBlur={(e) => actions.setGoodOrService(e.target.value)}/>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="text" onBlur={(e) => actions.setDescription(e.target.value)} />
                    <Form.Label>Rate:</Form.Label>
                    <Form.Control type="text" onBlur={(e) => actions.setRate(e.target.value)} />
                    <Form.Label>Minimum:</Form.Label>
                    <Form.Control type="text" onBlur={(e) => actions.setMinimumAmount(e.target.value)} />
                    <Form.Label>Maximum:</Form.Label>
                    <Form.Control type="text" onBlur={(e) => actions.setMaximumAmount(e.target.value)} />
                    <Form.Label>Rate Type</Form.Label>
                    { modalValues.isGoodOrServiceSelected === "GOOD" &&
                    <div>
                        <input type="radio" id="perItem" className="goodsAndServices" value="PERITEM"
                               name="rateType" onBlur={(e) => actions.setRateType(e.target.value)}/>
                        <label htmlFor="perItem">Per Item</label>
                    </div>
                    }
                    {modalValues.isGoodOrServiceSelected === "SERVICE" &&
                    <div>
                        <input type="radio" id="perHour" className="goodsAndServices" value="PERHOUR"
                               name="rateType" onBlur={(e) => actions.setRateType(e.target.value)}/>
                        <label htmlFor="perHour">Per Hour</label>
                        <input type="radio" id="perDay" className="goodsAndServices" value="PERDAY" name="rateType"
                               onBlur={(e) => actions.setRateType(e.target.value)}/>
                        <label htmlFor="perDay">Per Day</label>
                    </div>
                    }
                </Form.Group>
                <button className="btn btn-default goodsAndServicesButton goodsAndServicesButtonRight" onClick={handleSave} type="button">
                    Save Post
                </button>
                <button className="btn btn-default goodsAndServicesButton" onClick={handleCloseModal}>
                    Close
                </button>
            </Form>
        </ReactModal>
    )
};

export default EditPostModal;
