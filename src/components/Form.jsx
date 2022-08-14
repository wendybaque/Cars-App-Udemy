import React, {Component} from "react";
import CarImg from "./CarImg";

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
        </form>
    </div>
        )
    }
}

export default Form;