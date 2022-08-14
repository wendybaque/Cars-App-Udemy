// Exercice destructuring et conditions :

import React, {Component} from "react";

class Result extends Component {
    state = {
        name:"Bruno",
        winner:true
    }
    // SOLUTION 1
    // render() {
    //     if(this.state.winner) {
    //         return(<h1>Bravo, {this.state.name} ! 👏</h1>)
    //     } else {
    //         return(<h1>Dommage, {this.state.name}, tu as perdu ! 😵</h1>)
    //     }
    // }

    // SOLUTION 2
    // render() {

    //     let result;

    //     if(this.state.winner) {
    //         result = <h1>Bravo, {this.state.name}, tu as gagné ! 👏</h1>
    //         } else {
    //         result = <h1>Dommage, {this.state.name}, tu as perdu ! 😵</h1>
    //         }
    //         return result;
    // }

    // SOLUTION 3 (ternaire)
    render(){
        return(
            this.state.winner ? (<h1>Bravo, {this.state.name} ! 👏</h1>) : (<h1>Dommage, {this.state.name}, tu as perdu ! 😵</h1>)
        )
    }

    // SOLUTION 4 (&&/AND) (n'affiche le texte que s'il gagne/que la condition est true)
    // render(){
    //     return(
    //         this.state.winner && <h1>Bravo, {this.state.name} ! 👏</h1>
    //     )
    // }
}

export default Result;