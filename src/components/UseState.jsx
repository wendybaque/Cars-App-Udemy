// State avec une fonction et useState Hook (vidéo 77) :
import React, {useState} from 'react'

function UseState() {

    const [counter, setCounter] = useState(0);
    const addOne = () => {
        setCounter(counter + 1)
    }

  return (
    <div>
        <h1>UseState with function and Hooks</h1>
        <p>Function state : {counter}</p>
        <button className='btn btn-primary' onClick={addOne}>Click to increment the counter</button>
    </div>
  )
}

export default UseState;


// State avec une class avec un constructor (vidéo 77):
// import React, { Component } from 'react'

// export class UseState extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          counter:0
//       }
//     }
    
//     // Déclaration du state peut aussi se faire comme ça :
//     // state = {
//     //     clé:valeur,
//     //     clé:valeur
//     // }

//     addOne = () => {
//         this.setState({
//             counter: this.state.counter + 1
//         })
//     }

//   render() {
//     return (
//       <div>
//         <h1>State with class</h1>
//         <p>Class State : {this.state.counter}</p>
//         <button className='btn btn-primary' onClick={this.addOne}>Click to increment the counter</button>
//       </div>
//     )
//   }
// }

// export default UseState;