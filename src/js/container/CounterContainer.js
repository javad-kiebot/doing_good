import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from '../components/Counter';
import {addCounter} from "../actions/index";


let list = ["1","2","3","4","5","6","7","8","9","10"];
class CounterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMore:true,
            showResults:false,
            list: list.slice(0,6)
        };
        this.incrementCount = this.incrementCount.bind(this);
        this.moreClick = this.moreClick.bind(this);
        this.lessClick = this.lessClick.bind(this);
        this.onPressButton = this.onPressButton.bind(this);
    }
    moreClick() {
        this.setState({
            isMore: !this.state.isMore,
            list: ["1","2","3","4","5","6","7","8","9","10"]
        });
    }
    lessClick(){
        this.setState({
            isMore: !this.state.isMore,
            list: this.state.list.slice(0,6)
        });
    }

    incrementCount(count){
        this.props.addCounter(count);
    }
    onPressButton(){
        this.setState({
            showResults: !this.state.showResults
        });
    }

    render() {
        return (
            <div>
                <Counter incrementCount = {this.incrementCount} count = {this.props.count}/>
                <div>
                    {this.state.list.map(item => (
                        <button key={item} onClick={ this.onPressButton }>{item}
                        </button>
                    ))}
                    <p> { this.state.showResults ? 'show this content': null }</p>
                </div>
                <div onClick = { this.state.isMore ?  this.moreClick : this.lessClick}>{ this.state.isMore ? "More" : "Less" }</div>
            </div>
        );
    }
}


CounterContainer.propTypes = {

};

const mapDispatchToProps = dispatch => {
    return {
        addCounter: count => dispatch(addCounter(count))
    };
};

const mapStateToProps = (state) => {
    var {count} = state.counterReducer;
    return { count};
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

