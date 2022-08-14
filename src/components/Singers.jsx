import React from 'react'

// Solution destructuring 2 dans les paramètres de la fonction :
const Singers = ({name, age}) => {

    // Le desctructuring évite de faire ça :
    // const name = props.name;
    // const age = props.age;

    // Solution desctructuring 1 dans 1 const :
    // const {name, age} = props;

  return (
    <div>
      <p>Singer : {name} {age} </p>
    </div>
  )
}

export default Singers;

// Destructuring en class où on ne peut pas utiliser props :
// class Singers extends Component {
//     render() {
// const {name, age} = this.props;
//         return (
//             <div>
//               <p>Singer : {name} {age} </p>
//             </div>
//           )
//         }
//     }
// }
// export default Singers;

