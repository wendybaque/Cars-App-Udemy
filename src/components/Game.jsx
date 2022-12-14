// Exercice destructuring et conditions :

import React, {Component} from "react";
import CustomBtn from "./CustomBtn";

class Result extends Component {
    state = {
        name:"Bruno",
        winner:true
    }
    // SOLUTION 1
    // render() {
    //     if(this.state.winner) {
    //         return(<h1>Bravo, {this.state.name} ! š</h1>)
    //     } else {
    //         return(<h1>Dommage, {this.state.name}, tu as perdu ! šµ</h1>)
    //     }
    // }

    // SOLUTION 2
    // render() {

    //     let result;

    //     if(this.state.winner) {
    //         result = <h1>Bravo, {this.state.name}, tu as gagnĆ© ! š</h1>
    //         } else {
    //         result = <h1>Dommage, {this.state.name}, tu as perdu ! šµ</h1>
    //         }
    //         return result;
    // }

    // SOLUTION 3 (ternaire)
    // render(){
    //     return(
    //         this.state.winner ? (<h1>Bravo, {this.state.name} ! š</h1>) : (<h1>Dommage, {this.state.name}, tu as perdu ! šµ</h1>)
    //     )
    // }

    // SOLUTION 4 (&&/AND) (n'affiche le texte que s'il gagne/que la condition est true)
    // render(){
    //     return(
    //         this.state.winner && <h1>Bravo, {this.state.name} ! š</h1>
    //     )
    // }

    // SOLUTON 5 (Bootsrap + bouton changement de state)
    render () {   
        
        const stateColor = this.state.winner ? "alert-success" : "alert-danger";

        // Syle des boutons pour l'exercice vidĆ©os 47-48 :
        const successBtn = {
            backgroundColor:'green',
            color:'black'
        }

        const dangerBtn = {
            backgroundColor:'red',
            borderRadius:'20px'
        }

        return(
            <div className="container">
                <div className={`alert ${stateColor}`} role="alert">
                    {this.state.winner ? ` Bravo, ${this.state.name} ! š` : `Dommage, ${this.state.name}, tu as perdu ! šµ`}
                </div>

                <button className="btn btn-info" onClick={() => this.setState({winner:!this.state.winner})}>Change the state</button>
                <hr />
                
                {/* Exercice style vidĆ©os 47-48 */}
                <CustomBtn btnStyle={successBtn}>Cliquez ici</CustomBtn>
                <CustomBtn btnStyle={dangerBtn}>Cliquez ici</CustomBtn>
                <CustomBtn btnStyle={{backgroundColor:'blue'}}>Cliquez ici</CustomBtn>

                {/* Exercice onClick sur custom button vidĆ©os 49-50 */}
                <CustomBtn btnStyle={successBtn} handleClick={this.stateColor}>Changer le statut</CustomBtn>
            </div>
        )
    }
}

export default Result;