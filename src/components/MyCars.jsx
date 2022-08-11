import React, { Component } from "react";
import Car from './Car';
import MyHeader from "./MyHeader";
import Wrapper from "./Wrapper";

class Mycars extends Component {
    state = {
        cars : ["Peugeot", "Renault", "Toyota"]
    }

    // Ouvre un popup quand on tente de copier le texte
    noCopy = () => {
        alert("Merci de ne pas copier le texte !");
    }

    // Quand on passe la souris sur le texte, il se met en majuscules et violet
    addStyle = (e) => {
        console.log(e.target);
        if(e.target.classList.contains('styled')) {
            e.target.classList.remove('styled');

        } else { 
            e.target.classList.add('styled');
        }
    }

    render() {

        return (
            <div className="cars">
                <Wrapper>
                    <MyHeader myStyle={this.props.color}>
                        {this.props.title}
                    </MyHeader>
                    <p onCopy={this.noCopy} onMouseOver={this.addStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi iste fugiat nisi doloribus iusto recusandae minima voluptate magni soluta? Placeat nostrum enim debitis distinctio in totam veritatis ea dolorum harum!</p>
                </Wrapper>
                <Car color="black">{this.state.cars[0]}</Car>
                <Car>{this.state.cars[1]}</Car>
                <Car color="red">{this.state.cars[2]}</Car>
            </div>
        )
    }
}export default Mycars;