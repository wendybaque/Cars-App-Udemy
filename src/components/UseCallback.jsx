// Vidéos 89-90 : useCallback
// Composant qui remplace App.js pour avoir une fonction.
// Sert à l'optimisation, évite le rechargement automatique de tous les composants, si pas de modification.
// Ex : ne recharge pas le countTwo si changement seulement dans le countOne.

import React, {useState, useCallback} from 'react';
import ButtonBar from './ButtonBar';
import CountBar from './CountBar';

function UseCallback() {

const [countOne, setCountOne] = useState({value:0, btnColor: 'success', increment:25});
const [countTwo, setCountTwo] = useState({value:0, btnColor: 'danger', increment:20});

const incrementCountOne = useCallback((val) => {
    countOne.value < 100 && setCountOne({...countOne, value:countOne.value + val})
    }, [countOne]) 

const incrementCountTwo = useCallback((val) => {
    countTwo.value < 100 && setCountTwo({...countTwo, value:countTwo.value + val})
    }, [countTwo])


  return (
    <div>
        <CountBar text="countOne" count={countOne.value} bgColor={countOne.btnColor}/>
        <CountBar text="countTwo" count={countTwo.value} bgColor={countTwo.btnColor}/>

        <ButtonBar handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>Count 1</ButtonBar>
        <ButtonBar handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}>Count 2</ButtonBar>
    </div>
  )
}

export default UseCallback;
