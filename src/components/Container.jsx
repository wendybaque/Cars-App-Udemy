// Vidéo 84 : useEffect avec nettoyage lors du démontage

import React, {useState} from 'react'
import DisplayKey from './DisplayKey';

function Container() {

    const [show, setShow] = useState(true);
    const btnDisplay = show ? 'Cacher le composant' : 'Afficher le composant';
  
    return (
    <div className='text-center font-weight-bold'>
       <button className='btn btn-dark m-3' onClick={() => setShow(!show)}>{btnDisplay}</button>
        {/* N'affiche le composant que si show est true : */}
        {
           show && <DisplayKey />
        }
    </div>
  )
}

export default Container;