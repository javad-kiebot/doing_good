import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
         this.addCount = this.addCount.bind(this);
    }
    addCount(){
        this.props.incrementCount(this.props.count);
    }

    render() {
        return (
           <div>
               <h1 onClick = {this.addCount}>Count : {this.props.count}</h1>
           </div>
        );
    }
}

Counter.propTypes = {

};

export default Counter;
