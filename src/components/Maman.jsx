import React, { Component } from 'react'
import Enfant from "../components/Enfant";

class Maman extends Component {
    state = {
        messageMaman: null,
        messageEnfant: null,
        disabled: true
    }

    // ordreMaman = () => {
    //     this.setState({
    //         messageMaman:"Va ranger ta chambre ! 😈"
    //     })
    // }

    // Exercice Vidéo 34 : compléter le code de la méthode ordreMaman :
    ordreMaman = (msg) => this.setState({messageMaman:msg, disabled:false});
    reponseEnfant = msg => this.setState({messageEnfant:msg})

    // reponseEnfant = () => {
    //     this.setState({
    //         messageEnfant:"Je suis seulement ton enfant, tu n'as pas à me donner d'ordre ! 😜"
    //     })
    // }

    render() {
        return(
            <div>
                <h1>MAMAN</h1>
                <button onClick={() => this.ordreMaman("Va ranger ta chambre ! 😈")}>Ordre de la maman</button>
                <p>{this.state.messageMaman}</p>
                <Enfant name="ENFANT" leState={this.state} reponseEnfantProps={this.reponseEnfant}/>
            </div>
        )
    }
}

export default Maman;