import React, { Component } from "react";
import Car from './Car';

class Mycars extends Component {
    state = {
        cars : ["Peugeot", "Renault", "Toyota"]
    }
    render() {
      const {title} = this.props;
      const {color} = this.props;

        return (
            <div className="cars">
                <h1>{title} {color}</h1>
                <Car color="black">{this.props.cars}</Car>
                <Car>{this.props.cars}</Car>
                <Car color="red">{this.props.cars}</Car>
            </div>
        )
    }
}export default Mycars;