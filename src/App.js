import React, {Component} from 'react';
import Mycars from './components/MyCars';
import './App.css';

// Transformation de la fonction en class pour pouvoir utiliser le State
// Nécessite une fonction render qui, elle, nécessite un return
class App extends Component {
  // Ici, le State définit les props du composant Mycars
  state = {
    title: 'My car catalog',
    color: 'blue'
}
  render() {
    return (
      <div className="App">
        <Mycars title={this.state.title} color={this.state.color} />
      </div>
    );
  }
}

export default App;
