import React, {Component} from "react";
import CarImg from "./CarImg";
import MyHeaderOne from "../components/myHeaderOne";

import "../components/form.css";
// import de modules css (document à part) :
import styles from "./myCss.module.css";
// import de Styled Components :
import styled from "styled-components"

// Coloration avec extension Styled-Component de Julien Poissonier :
// La const déclarée doit toujours commencer avec une majuscule
const Titre = styled.h4 `
color: orange;
font-size: 60px;
`

const Bouton = styled.button `
background-color: aliceblue;
color: red;
padding: 7px 9px;
`

const Paragraphe = styled.p `
color: palevioletred;
font-weight: bold;
`

const titleRed = {fontSize:"50px", color: "red"}

class Form extends Component {
    state = {
        username:'',
        color:'',
        colors: ["", "red", "blue", "green", "black", "orange"],
        comment:''
    }

    handlePseudo = (e) => {
        this.setState({username: e.target.value})
    }

    handleColor = (e) => {
        this.setState({color:e.target.value})
    }

    handleComment = (e) => {
        this.setState({comment:e.target.value})
    }

    handleSubmit = (e) => {
        // méthode preventDefault interdit le rechargement de la page par défaut
        e.preventDefault();
        console.log(`username: ${this.state.username} color: ${this.state.color} comment: ${this.state.comment}`);
    }


render(){

    const myStyle = this.props.head ? ('yellow') : ('violet');

    return(
     <div>
        <CarImg color="red" height="400"/>
        <h1>Commentaire</h1>
        <form onSubmit={this.handleSubmit}>
            <div className="form">
                <label>Pseudo</label>
                <input type="text" value={this.state.username} onChange={this.handlePseudo}></input>
            </div>
            <div>
                <label>Color</label>
                <select value={this.state.color} onChange={this.handleColor}>
                    {
                    this.state.colors.map((color, index) => {
                        return <option key={index}value={color}>{color}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <label>Commentaire</label>
                <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
            </div>
            <button type="submit">Valider !</button>
            
            
            {/* CSS INLINE : c'est comme un objet, donc on peut le déclarer à l'intérieur de la classe dans une const */}
            <div>
            <hr />
                <h1 style={titleRed}>Commentaire css inline</h1>
                <button style={{color:"red", backgroundColor:"darkred"}}>Valider</button>
            </div>

            {/* CSS DANS UN FICHIER A PART (form.css) : c'est comme un objet, donc on peut le déclarer à l'intérieur de la classe dans une const */}
            <div>
            <hr />
                <h1 className="titleGreen">Commentaire fichier css à part</h1>
                {/* Ajout de 2 classes (1 depuis le app.js + 1 depuis le css --> ne pas oublier l'espace ou backticks !) */}
                <p className={myStyle + ' bigFont'}>Je suis jaune ou violet</p>
                {/* Même chose que : */}
                <p className={`${myStyle} bigFont`}>Je suis jaune ou violet</p>
                <button className="buttonGreen">Valider</button>
            </div>

            {/* CSS DEPUIS LES MODULES ET UN AUTRE COMPOSANT (avec un nouveau fichier css myCss.module.css)*/}
            {/* Les modules ne s'appliquent qu'au fichier dans lequel ils sont importés vs le css fonctionne partout --> permet de mieux cibler le composant à styliser sans impacter ses enfants.  */}
            <div>
                <hr />
                <h2 className={styles.pink}>Commentaire Module local</h2>
                <MyHeaderOne />
            </div>

            {/* CSS avec Bootstrap : installer le pakage + importer le bon fichier dans index.js. */}
            <div>
                <hr />
                <h3 className="display-3">Commentaire css avec Bootstrap</h3>
                <p className="font-weight-light">Je suis un paragraphe</p>
                <button className="btn btn-danger">Je suis un bouton</button>
            </div>

            {/* CSS avec Styled Components : évite les effets de bord, n'importe le style que si et seulement si on en a besoin. */}
            <div>
                <hr />
                <Titre>Commentaire css avec Styled Components</Titre>
                <Paragraphe>Je suis un paragraphe</Paragraphe>
                <Bouton>Je suis un bouton</Bouton>
            </div>
        </form>
    </div>
        )
    }
}

export default Form;