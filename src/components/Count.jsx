// Vidéos 87 & 88 : useReducer 
import React, {useReducer} from 'react';

const initialState = {
    countLeft: 0,
    countRight: 0
};

// action : élément qui donne l'instruction au reducer pour obtenir le nouvel état.
const reducer = (state, action) => {
    switch(action.type){
        case'increment' :
            return {...state, countLeft : state.countLeft + action.value}
        case 'decrement' :
            return {...state, countLeft : state.countLeft - action.value}
        case'increment2' :
            return {...state, countRight : state.countRight + action.value}
        case 'decrement2' :
            return {...state, countRight : state.countRight - action.value}
        case 'reset' :
            return initialState
        default :
            return state
    }
}

function Count() {

    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='row'>
        <div className='col-6'>
            <h1 className='h1'>{count.countLeft}</h1>
                <button className='btn btn-success m-4' onClick={() => dispatch({type:'increment', value: 1})}>+</button>
                <button className='btn btn-danger m-4' onClick={() => dispatch({type:'decrement', value: 1})}>-</button>
        </div>
        <div className='col-6'>
            <h1 className='h1'>{count.countRight}</h1>
                <button className='btn btn-success m-4' onClick={() => dispatch({type:'increment2', value: 10})}>+</button>
                <button className='btn btn-danger m-4' onClick={() => dispatch({type:'decrement2', value: 10})}>-</button>
        </div>
        <div className='col'>
            <button className='btn btn-primary m-4' onClick={() => dispatch({type: 'reset'})}>RESET</button>
        </div>
    </div>
  )
}

export default Count
