import React, {Component} from 'react';
import Mycars from './components/MyCars';
import Welcome from './components/Welcome';

import './App.css';

// Transformation de la fonction en class pour pouvoir utiliser le State
// Nécessite une fonction render qui, elle, nécessite un return
class App extends Component {
  // Ici, le State définit les props du composant Mycars
  state = {
    title: 'My car catalog',
    color: 'blue'
}

// Change le titre quand on clique sur le bouton 
changeTitle = (e) => {
  console.log(e.target);
  this.setState({
    title:'My new car catalog'
  })
}

// Change le titre via le state et le paramètre title
changeViaParams = (title) => {
  console.log(title);
  this.setState({
    title:title
  })
}

// Change le titre via un bind
changeViaBind = (param) => {
  console.log(param);
  this.setState({
    title:param
  })
}

// Change le titre via ce que l'utilisateur remplit dans l'input
changeViaInput = (e) => {
  console.log(e.target.value)
  this.setState({
    title:e.target.value
  })
}

  render() {
    return (
      <div className="App">
        <Mycars title={this.state.title} color={this.state.color} />
        <button onClick={this.changeTitle}>Change title</button>
        {/* Fonction fléchée pour ne pas que la fonction changeViaParams se lance directement au chargement de la page */}
        <button onClick={() => this.changeViaParams('My car catalog via params')}>Change title via params</button>
        <button onClick={this.changeViaBind.bind(this, 'My car catalog via bind')}>Change title via bind</button>
        <input type="text" onChange={this.changeViaInput} value={this.state.title}></input>
        <Welcome />
      </div>
    );
  }
}

export default App;
