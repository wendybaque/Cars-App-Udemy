import React, { Component, Fragment } from "react";
import Car from './Car';
import MyHeader from "./MyHeader";
import Wrapper from "./Wrapper";

class Mycars extends Component {
    state = {
        cars : [
            {name: 'Renault', color: "gray", year:2022},
            {name: 'Peugeot', color: "blue", year:2021},
            {name: 'Toyota', color: "black", year:2002},
            {name: 'Ferrari', color: "red", year:2001},
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

    // Calcule l'âge de la voiture en fonction de l'année
    getAge = (year) => {
        const now = new Date().getFullYear();
        const age =  now - year;

       // Gestion de l'affichage de year.s au pluriel ou non en fonction du nombre d'années :
       let yearStr = "";

       if (age === 1) {
        yearStr = "year";
       } else if (age > 1) {
        yearStr = "years";

       }
       return `${age} ${yearStr}`
    }

    render() {
        // const [Renault, Peugeot, Toyota, Ferrari] = this.state.cars;

        // const year = new Date().getFullYear();
        return (
            // Un Fragment ne peut pas avoir de className ni de style
            // Fragment peut aussi s'ouvrir et se fermer comme ça : <> et </> snas le mot dedans --> ne fonctionne pas si on utilise une key cf message console.
            <Fragment>
                <Wrapper>
                    <MyHeader myStyle={this.props.color}>
                        {this.props.title}
                    </MyHeader>
                    <p onCopy={this.noCopy} onMouseOver={this.addStyle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi iste fugiat nisi doloribus iusto recusandae minima voluptate magni soluta? Placeat nostrum enim debitis distinctio in totam veritatis ea dolorum harum!</p>
                    <button onClick={this.addTenYears}>Cars + 10 year</button>
                </Wrapper>

                {/* Idem map cf plus bas mais avec tableau destructuré : */}
                    {/* <Car
                        name={Renault.name}
                        color={Renault.color} 
                        year={Renault.year}/>
                    <Car 
                        name={Peugeot.name} 
                        color={Peugeot.color}
                        year={Peugeot.year}/>
                    <Car 
                        name={Toyota.name}
                        color={Toyota.color}
                        year={Toyota.year}/>
                    <Car 
                        name={Ferrari.name}
                        color={Ferrari.color}
                        year={Ferrari.year}/> */}

                {/* <Car color={this.state.cars[0].color} year={year - this.state.cars[0].year + ' year old'}>{this.state.cars[0].name}</Car>
                <Car color={this.state.cars[1].color} year={year - this.state.cars[1].year + ' year old'}>{this.state.cars[1].name}</Car>
                <Car color={this.state.cars[2].color} year={year - this.state.cars[2].year + ' year old'}>{this.state.cars[2].name}</Car>
                <Car color={this.state.cars[3].color} year={year - this.state.cars[3].year + ' year old'}>{this.state.cars[3].name}</Car> */}
                {/* Transformé avec une méthode map (attention à bien ajouter la key et l'index !) + on a changé children en name : */}
                {/* {
                    this.state.cars.map((cars, index) => {
                        return(
                            <div  key={index}>
                                <Car name={cars.name} color={cars.color} year={year - cars.year + ' years old'}/>
                            </div>
                        )
                    })
                } */}
                {/* Idem mais avec fonction map destructurée : */}
                <table className="carsTable">
                    <tr>
                        <th>Brand</th>
                        <th>Year</th>
                        <th>Color</th>
                    </tr>
                {
                    this.state.cars.map(({name, color, year}, index) => {
                        return(
                            <Fragment key={index}>
                                <Car 
                                name={name} 
                                color={color} 
                                year={this.getAge(year)}
                                />
                            </Fragment>
                        )
                    })
                }
                </table>
                <hr />
                {/* Fonction qui n'a rien à voir avec l'exercice, mais je la laisse là pour la retrouver */}
                {
                    Math.random()
                }
                <hr />

            </Fragment>
        )
    }
}

export default Mycars;