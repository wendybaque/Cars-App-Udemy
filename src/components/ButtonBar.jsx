// Vidéos 89-90 : useCallback
import React from 'react'

function ButtonBar({btnColor, increment, children, handleClick}) {
  return (
    <button className={`btn btn-${btnColor} m-4`} onClick={() => handleClick(increment)}>+ {increment}%</button>
  )
}

export default React.memo(ButtonBar);
