import React, { Component } from "react";

class Welcome extends Component {
    // BOUTON 1
    goodMorning = () => {
        console.log("Good Morning !");
    }
    // BOUTON 2
    goodEvening = (arg) => {
        console.log(arg);
    }

    render() {
  return (
    <div className='Welcome'>
      <button onClick={this.goodMorning}>Invoquer une fonction "Good morning"</button>
      <button onClick={() => this.goodEvening("Good Evening")}>Invoquer une fonction avec, comme argument "Good evening"</button>
      <button onClick={() => console.log("Good Night !")}>Console.log("Good night") sur le bouton (sans invoquer de fonction)</button>
    </div>
  )}
}

export default Welcome;
