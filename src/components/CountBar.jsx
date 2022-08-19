// Vidéos 89-90 : useCallback
import React from 'react'

function CountBar({text, count, bgColor}) {

    const progress = {width:`${count}%`}

  return (
    <div className='container'>
      <h1 className='h1'>{count}%</h1>
        <div className='progress'>
            <div 
            className={`progress-bar progress-bar-striped bg-${bgColor}`}
            role="progressbar"
            style={progress}>
            </div>
        </div>
    </div>
  )
}

export default React.memo(CountBar);
