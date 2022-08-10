import React from 'react'

function Wrapper({children}) {
  return (
    <div style={{
        backgroundColor:'lightblue',
        width:'400px',
        padding: '10px',
        margin: '5px auto'
        }}>
            {children}
        </div>
  )
}

export default Wrapper;
