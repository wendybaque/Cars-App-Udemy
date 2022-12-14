import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './App.css';
import { UserContext, ColorContext } from './components/MyContext';

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
import UseState from './components/UseState';
import Todo from './components/Todo';
import Counter from './components/Counter';
import Container from './components/Container';
import Profile from './components/Profile';
import Count from './components/Count';
import UseCallback from './components/UseCallback';

// Transformation de la fonction en class pour pouvoir utiliser le State
// Nécessite une fonction render qui, elle, nécessite un return
class App extends Component {
  // Ici, le State définit les props du composant Mycars + Profile
  state = {
    title: 'My car catalog',
    color: 'blue',
    display: true,
    user: {
      name: 'Lisa',
      age: 8
    }

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
        <hr />
        {/* Exercice vidéo 77 : useState  */}
        <UseState />
        <hr />
        {/* Exercice Todolist vidéo 79 (useState) : */}
        <Todo />
        <hr />
        {/* Exercice Counter vidéo 80 : useEffect après render : */}
        <Counter />
        <hr />
        {/* Exercice Vidéo 84 : useEffect et nettoyage : */}
        <Container />
        <hr />
        {/* Exercice Vidéo 85 : useContext : */}
        <UserContext.Provider value={this.state.user}>
          <ColorContext.Provider value={'red'}>
            <Profile />
          </ColorContext.Provider>
        </UserContext.Provider>
        <hr />
        {/* Exercice Vidéos 87 & 88 : useReducer : */}
        <Count />
        <hr />
        {/* Exercice vidéos 89-90 : useCallback */}
        <UseCallback />
        <hr />
      </div>
    );
  }
}

export default App;
