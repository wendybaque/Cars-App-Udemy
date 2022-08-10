import React, { Component } from "react";
import Car from './Car';
import MyHeader from "./MyHeader";
import Wrapper from "./Wrapper";

class Mycars extends Component {
    state = {
        cars : ["Peugeot", "Renault", "Toyota"]
    }
    render() {

        return (
            <div className="cars">
                <Wrapper>
                <MyHeader />
                <Car color="black">{this.state.cars[0]}</Car>
                <Car>{this.state.cars[1]}</Car>
                <Car color="red">{this.state.cars[2]}</Car>
                </Wrapper>
            </div>
        )
    }
}export default Mycars;