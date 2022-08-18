// Vidéo 80 : useEffect après render()
// Vidéo 81 useEffect avec condition
// Vidéo 82 : useEffect comme CDM

// Avec une fonction, modifie le titre de l'app :
import React, {useState, useEffect} from 'react'

function Counter() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // S'enclenche à chaque render(), revient à faire un componentDidMount + ComponentDidUpdate en 1 seule fonction :
    // On ajoute un compteur de 3 secondes pour avoir le temps de voir la modification :
    useEffect(() => {
        setTimeout(() => {
            document.title =`Vous avez cliqué ${count} fois.`
        }, 3000)
        // On ajoute un tableau de dépendances pour contrôler quand se déclenche la fonction, en fonction de la modification d'un paramètre spécifique noté dans le tableau.
        // Si tableau de dépendances vide, la fonction s'exécuter une seule et unique fois. 
    }, [count])

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Cliquer</button>
        <input 
        type="text" 
        value={name} 
        onChange={e => setName(e.target.value)}></input>
    </div>
  )
}

export default Counter;


// Avec une class, modifie le titre de l'app :
// import React, { Component } from 'react'

// export class Counter extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0,
//          name:''
//       }
//     }

//     componentDidMount() {
//         document.title =`Vous avez cliqué ${this.state.count} fois.`
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if(this.state.count !== prevState.count) {
//             document.title =`Vous avez cliqué ${this.state.count} fois.`
//         }
//     }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button className="btn btn-dark" onClick={() => this.setState({count : this.state.count + 1})}>Cliquer</button>
//         <input type="text" value={this.state.name} onChange={e => {this.setState({name:e.target.value})}}></input>
//       </div>
//     )
//   }
// }

// export default Counter;