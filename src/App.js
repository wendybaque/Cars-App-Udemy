import React, {Component} from 'react';
import {Container, Button} from 'react-bootstrap';

import Mycars from './components/MyCars';
import Welcome from './components/Welcome';
import Maman from './components/Maman';
import Display from './components/Display';
import Result from './components/Game';
import Form from './components/Form';
import CustomBtn from './components/CustomBtn';
import Welcome2 from './components/Welcome2';
import Template from './components/Template';
import Buttons from './components/Buttons';
import LifeCycle from './components/LifeCycle';

import './App.css';

// Transformation de la fonction en class pour pouvoir utiliser le State
// Nécessite une fonction render qui, elle, nécessite un return
class App extends Component {
  // Ici, le State définit les props du composant Mycars
  state = {
    title: 'My car catalog',
    color: 'blue',
    display: true
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

// Vidéo 57 : affiche ou pas le component en fonction du state de display :
removeOrDisplay = () => {
  if(this.state.display){
    this.setState({
      display: false
    })
  } else {
    this.setState({
      display: true
    })
  }
}

  render() {
    const sayHello = () => alert ("Hello world !");
    const customBtn = {
      backgroundColor: 'grey',
        border:'none',
        color:'#fff',
        fontSize:'19px',
        textAlign:'center',
        padding:'15px 30px',
        textDecoration:'none',
        borderRadius:'7px',
        display:'block',
        margin:'5px auto'
    }

    const showComponent = this.state.display ? (<LifeCycle name="Toto 2"/>) : (<div><p>Il n'y a pas de composant.</p></div>);

    return (
      <div className="App">
        <Mycars title={this.state.title} color={this.state.color} />
        <button onClick={this.changeTitle}>Change title</button>
        {/* Fonction fléchée pour ne pas que la fonction changeViaParams se lance directement au chargement de la page */}
        <button onClick={() => this.changeViaParams('My car catalog via params')}>Change title via params</button>
        <button onClick={this.changeViaBind.bind(this, 'My car catalog via bind')}>Change title via bind</button>
        <input type="text" onChange={this.changeViaInput} value={this.state.title}></input>
        <hr />
        <Welcome />
        <hr />
        <Maman />
        <hr />
        <Display />
        <hr />
        <Result />
        <hr />
        <Form head={false}/>
        <hr />
        {/* Exercice package react-Boostrap vidéo 53 en ajoutant un Container et Button */}
        <Container>
          <CustomBtn btnStyle={{backgroundColor:'yellow', color:'blue'}} handleClick={sayHello}>Say hello</CustomBtn>
          <Button onClick={sayHello} variant='warning' style={customBtn}>Say hello with React-Bootstrap package</Button>
        </Container>
        <hr />
        {/* Exercice package react-Boostrap vidéo 51 */}
        <Template />
        <Welcome2 />
        <Buttons />
        <hr />
        {/* Exercice lifecycle vidéo 55 phase de montage*/}
        {/* <LifeCycle name="Toto 2"/> */}
        {/* Pour accéder à la méthode componentWillUnmount et retirer le composant LifeCycle */}
        {showComponent}
        <button onClick={this.removeOrDisplay}>Cliquer ici</button>
      </div>
    );
  }
}

export default App;
