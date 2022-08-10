import React, { Component } from "react";
import Car from './Car';

class Mycars extends Component {
    state = {
        cars : ["Peugeot", "Renault", "Toyota"]
    }
    render() {

        return (
            <div className="cars">
                <h1 style={{color: this.props.color}}>{this.props.title}</h1>
                <Car color="black">{this.state.cars[0]}</Car>
                <Car>{this.state.cars[1]}</Car>
                <Car color="red">{this.state.cars[2]}</Car>
            </div>
        )
    }
}export default Mycars;