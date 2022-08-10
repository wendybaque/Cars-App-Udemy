import React, { Component } from "react";
import Car from './Car';

class Mycars extends Component {
    
    render() {
        return (
            <div className="cars">
                <h1>{this.props.title}</h1>
                <Car color="black"></Car>
                <Car>Mercedes</Car>
                <Car color="red">Ferrari</Car>
            </div>
        )
    }
}export default Mycars;