// Section 6 : cycle de vie des composants :
// Dans le cas où note render() retourne un composant enfant.
// Snippet rce pour avoir une classe

import React, { Component } from 'react'

export class ChildComponent extends Component {

     // Snippet rconst :
     constructor(props) {
        super(props)
      
        // Phase de montage = step:1
        // Phase de mise à jour = step:2
        // Phase de démontage = step:3
        this.state = {

        }
  
        console.log('Je suis dans le constructor() ENFANT.');
      }

      // Snippet cdm :
      componentDidMount() {
        console.log('Je suis dans le componentDidMount ENFANT.');
    }

  render() {
    console.log('Je suis dans le render() ENFANT.');
    return (
      <div>
    {console.log('Mise à jour du DOM dans le composant ENFANT.')}

        ChildComponent
      </div>
    )
  }
}

export default ChildComponent;
