// Section 6 : cycle de vie des composants :
// Snippet rce pour une class avec Component

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class LifeCycle extends Component {
    // Snippet rconst :
    constructor(props) {
      super(props)
    
      // Phase de montage = step:1
      // Phase de mise à jour = step:2
      // Phase de démontage = step:3
      this.state = {
        name:'Toto',
        step:1
      }

      console.log(`etape ${this.state.step} :  Je suis dans le constructor()`);
    }

    // Snippet cdm :
    // Méthode componentDidMount sera invoquée une seule fois après que le composant + ses enfants ont été chargés dans le DOM (montés).
    componentDidMount() {
        console.log(`etape ${this.state.step} :  Je suis dans le componentDidMount`);
        this.setState({
            name: this.props.name,
            step: this.state.step + 1
        })

        // Etape 2, mise à jour du DOM avec mise à jour du state :
        console.log(`etape ${this.state.step} :  setState() a changé le state dans le componentDidMount`);

    }

    // Snippet cdup :
    // 2 paramètres (prev) : le props d'avant et le state d'avant.
    // Ne pas utiliser de setState() sinon on se retrouve dans une boucle infinie dans l'étape de mise à jour.
    componentDidUpdate(prevProps, prevState) {
        console.log(`etape ${this.state.step} :  setState() a changé le state dans le componentDidUpdate`);
        console.log(prevState);
        console.log(this.state);
    } 

    // Snippet cwum :
    // Idem ne pas utiliser de setState().
    componentWillUnmount() {
        console.log('Je suis dans la méthode componentWillUnmount().')
    }

    // La méthode render() est la seule méthode obligatoire dan sun composant.
    // Elle interprète les props et les states et les retourne dans un jsx.
    // Ne JAMAIS changer le state au niveau de la méthode render() !
  render() {

    console.log(`etape ${this.state.step} :  Je suis dans le render()`);
    
    return (
      <div className="border border-info p-2 border border-5 rounded-5">
        {console.log(`etape ${this.state.step} :  Mise à jour du DOM dans le return()`)}
        <p>Chargement : {this.state.step}</p>
        <p>Nom : {this.state.name}</p>

        <ChildComponent />
      </div>
    )
  }
}

export default LifeCycle;