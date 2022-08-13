import React from 'react'

const Enfant = props => {

    // Vidéo 32 : Affiche le bouton relatif à l'enfant s'il y a une réponse de la maman, sinon, n'affiche pas le bouton
    // const boutonReponseEnfant = props.leState.messageMaman !== null ? (<button onClick={props.reponseEnfant}>Réponse de l'enfant</button>) : (<button disabled>Réponse de l'enfant</button>);

    return(
        <div>
            <h2>{props.name}</h2>
            {/* Exercice Vidéo 34 : gestion de l'affichage du bouton directement dans le JSX */}
            {/* {boutonReponseEnfant} */}
            <button disabled={props.leState.disabled} onClick={() => props.reponseEnfantProps("Non merci, je préfère regarder la TV. 😒")}>Réponse de l'enfant</button>
            <p>{props.leState.messageEnfant}</p>
        </div>
    )
}

export default Enfant;