import React, { Component } from "react";
import Car from './Car';
import MyHeader from "./MyHeader";
import Wrapper from "./Wrapper";

class Mycars extends Component {
    state = {
        cars : [
            {name: 'Renault', color: "gray", year:2000},
            {name: 'Peugeot', color: "blue", year:2001},
            {name: 'Toyota', color: "black", year:2002},
            {name: 'Ferrari', color: "red", year:2003},
        ]
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

    // Ajoute 10 ans à la voiture (props year)
    addTenYears = () => {
        const updatedState = this.state.cars.map((param) => {
            return param.year -= 10;
        })
        this.setState({
            updatedState
        })
    }

    render() {
        const year = new Date().getFullYear();
        return (
            <div className="cars">
                <Wrapper>
                    <MyHeader myStyle={this.props.color}>
                        {this.props.title}
                    </MyHeader>
                    <p onCopy={this.noCopy} onMouseOver={this.addStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi iste fugiat nisi doloribus iusto recusandae minima voluptate magni soluta? Placeat nostrum enim debitis distinctio in totam veritatis ea dolorum harum!</p>
                    <button onClick={this.addTenYears}>Cars - 10 year</button>
                </Wrapper>
                {/* <Car color={this.state.cars[0].color} year={year - this.state.cars[0].year + ' year old'}>{this.state.cars[0].name}</Car>
                <Car color={this.state.cars[1].color} year={year - this.state.cars[1].year + ' year old'}>{this.state.cars[1].name}</Car>
                <Car color={this.state.cars[2].color} year={year - this.state.cars[2].year + ' year old'}>{this.state.cars[2].name}</Car>
                <Car color={this.state.cars[3].color} year={year - this.state.cars[3].year + ' year old'}>{this.state.cars[3].name}</Car> */}
                {/* Transformé avec une méthode map (attention à bien ajouter la key et l'index !) + on a changé children en name : */}
                {
                    this.state.cars.map((cars, index) => {
                        return(
                            <div  key={index}>
                                <Car name={cars.name} color={cars.color} year={year - cars.year + ' years old'}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}export default Mycars;