import ReactModal from "react-modal";
import React from "react";
import { Form, Button } from 'react-bootstrap'
// import { Form, Button } from "react-bootstrap";


class GoodsAndServicesModal extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            goodsSelected:'',
            servicesSelected:'',
            goods:'',
            description:'',
            rate:'',
            minimum:'',
            maximum:'',
            rateType:''
        };
        this.goodsSelected = this.goodsSelected.bind(this);
        this.servicesSelected = this.servicesSelected.bind(this);
        this.goods = this.goods.bind(this);
        this.description = this.description.bind(this);
        this.rate = this.rate.bind(this);
        this.minimum = this.minimum.bind(this);
        this.maximum = this.maximum.bind(this);
        this.rateType = this.rateType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        this.props.searchPostingAction.postWorkRequestAction(
                this.state.goodsSelected,
                this.state.servicesSelected,
                this.state.goods,
                this.state.description,
                this.state.rate,
                this.state.minimum,
                this.state.maximum,
                this.state.rateType,
            this.props.postType);
    }

    goodsSelected(event){
        this.setState({ goodsSelected:event.target.value})
    }
    servicesSelected(event){
        this.setState({ servicesSelected:event.target.value})
    }
    goods(event){
        this.setState({ goods:event.target.value})
    }
    description(event){
        this.setState({ description:event.target.value})
    }
    rate(event){
        this.setState({ rate:event.target.value})
    }
    minimum(event){
        this.setState({ minimum:event.target.value})
    }
    maximum(event){
        this.setState({ maximum:event.target.value})
    }
    rateType(event){
        this.setState({ rateType:event.target.value})
    }

    render () {
        const customStyles = {
            content : {
                top                   : '5%',
                left                  : '20%',
                right                 : '20%',
                bottom                : 'auto',
                height                 : '100vh',
                overflow             : 'auto'
            }
        };
        return (
            <ReactModal
                isOpen={this.props.showModal}
                contentLabel="Minimal Modal Example"
                style={customStyles}
            >
                <h4 id="contained-modal-title" className="modal-title">Post Wanted Goods or Services </h4>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="skill-text">Services/Goods Required</Form.Label>
                        <div>
                            <input className="goodsAndServices" type="radio" name="goodRequired" onChange={this.goodsSelected} />Goods
                            <input className="goodsAndServices" type="radio" name="goodRequired" onChange={this.servicesSelected} />Services
                        </div>
                        <Form.Label >Goods/Service:</Form.Label>
                        <Form.Control type="text" onChange={this.goods} />
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="text" onChange={this.description}/>
                        <Form.Label>Rate:</Form.Label>
                        <Form.Control type="text" onChange={this.rate}/>
                        <Form.Label>Minimum:</Form.Label>
                        <Form.Control type="text" onChange={this.minimum}/>
                        <Form.Label>Maximum:</Form.Label>
                        <Form.Control type="text" onChange={this.maximum} />
                        <Form.Label>Rate Type</Form.Label>
                        <div>
                            <input type="radio" className="goodsAndServices" name="rateType" onChange={this.rateType}/>Per Item
                        </div>
                    </Form.Group>
                    <button className="btn btn-default goodsAndServicesButton goodsAndServicesButtonRight" onClick={this.handleSubmit} type="button">Save</button>
                    <button className="btn btn-default goodsAndServicesButton" onClick={this.props.handleCloseModal}>Close</button>
                </Form>
                           </ReactModal>
        );
    }
}

const props = {};

export default GoodsAndServicesModal;