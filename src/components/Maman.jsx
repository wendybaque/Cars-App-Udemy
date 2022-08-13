import React, { Component } from 'react'
import Enfant from "../components/Enfant";

class Maman extends Component {
    state = {
        messageMaman: null,
        messageEnfant: null,
    }

    ordreMaman = () => {
        this.setState({
            messageMaman:"Va ranger ta chambre ! 😈"
        })
    }

    reponseEnfant = () => {
        this.setState({
            messageEnfant:"Je suis seulement ton enfant, tu n'as pas à me donner d'ordre ! 😜"
        })
    }

    render() {
        return(
            <div>
                <h1>MAMAN</h1>
                <button onClick={this.ordreMaman}>Ordre de la maman</button>
                <p>{this.state.messageMaman}</p>
                <hr />
                <Enfant name="ENFANT" leState={this.state} reponseEnfant={this.reponseEnfant}/>
            </div>
        )
    }
}

export default Maman;