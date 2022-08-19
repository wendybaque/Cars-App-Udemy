// Vidéo 85 : useContext
import React, {useContext} from 'react';
import { UserContext, ColorContext } from './MyContext';

  function ContentData() {

    const user = useContext(UserContext)
    const color = useContext(ColorContext)

    return(
      <div style={{color:color}}>
        <h1>useContext</h1>
          <ul>
            <li>Name : {user.name}</li>
            <li>Age : {user.age}</li>
          </ul>
      </div>
    )
  }
  export default ContentData;

// Même chose que :
// function ContentData() {
//   return (
//     <UserContext.Consumer>
//       {
//         user => {
//           return(
//             <ColorContext.Consumer> 
//             {
//               color => {
//                 return (
//                   <div style={{color:color}}>
//                     <h1>useContext</h1>
//                     <ul>
//                       <li>Name : {user.name}</li>
//                       <li>Age : {user.age}</li>
//                     </ul>
//                   </div>
//                 )
//               }
//             }
//             </ColorContext.Consumer>
//           )
//         }
//       }
//     </UserContext.Consumer>
//   )
// }

// export default ContentData;
