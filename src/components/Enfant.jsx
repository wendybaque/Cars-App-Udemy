import React from 'react'

const Enfant = props => {

    // Affiche le bouton relatif à l'enfant s'il y a une réponse de la maman, sinon, n'affiche pas le bouton
    const boutonReponseEnfant = props.leState.messageMaman !== null ? (<button onClick={props.reponseEnfant}>Réponse de l'enfant</button>) : (<button disabled>Réponse de l'enfant</button>);

    return(
        <div>
            <h2>{props.name}</h2>
            {boutonReponseEnfant}
            <p>{props.leState.messageEnfant}</p>
        </div>
    )
}

export default Enfant;