// Vidéo 84 : useEffect avec nettoyage lors du démontage
// Pour afficher la touche du clavier sur laquelle on clique.

// AVEC UNE CLASS :
// import React, { Component } from 'react'

// export class DisplayKey extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          keyCode:null
//       }
//     }

//     handleKeyCode = (e) => {
//         this.setState({
//             keyCode:e.code
//         })
//     }

//     componentDidMount() {
//         document.addEventListener("keyup", this.handleKeyCode)
//     }

//     // Arrête l'event listener quand le composant est caché :
//     componentWillUnmount(){
//         document.removeEventListener("keyup", this.handleKeyCode)
//     }
    
//   render() {
//     const {keyCode} = this.state;
//     return (
//       <div className='card'>
//         <div className='card-body'>
//             <h1 className='text-center'>{keyCode}</h1>
//         </div>
//       </div>
//     )
//   }
// }

// export default DisplayKey;

// AVEC UNE FONCTION :
import React, {useState, useEffect} from 'react'

function DisplayKey() {

    const [keyCode, setKeyCode] = useState('');
    const handleKeyCode = (e) => {
        setKeyCode(e.code)
    }

    useEffect(() => {
        document.addEventListener("keyup", handleKeyCode)
        // Arrête l'event listener quand le composant est caché (idem componentWillUnmount) :
        return () => {
            document.removeEventListener("keyup", handleKeyCode)
        }
    }, []);

  return (
    <div className='card bg-secondary text-white'>
        <div className='card-body'>
            <h1 className='text-center'>{keyCode}</h1>
        </div>
    </div>
  )
}

export default DisplayKey;