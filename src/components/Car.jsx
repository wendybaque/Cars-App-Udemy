import React from 'react';

function Car({children, color}) {
  const brandInfo = children ? (<p>Brand : {children}</p>) : (<p> Brand : undefined</p>)
  // Même chose que :
  // if(children)  {
  //   return (
  //     <div>Brand : {children}</div>
  //   )} else {
  //     return <p>no brand</p>
  //   }
  // }

  let colorInfo = "";
  if(color) {
    colorInfo = color;
  } else {
    colorInfo = 'no color'
  }

  if (children) {
    return (
      <div style={{
        backgroundColor:'lightblue',
        width:'400px',
        padding: '10px',
        margin: '5px auto'
        }}>
        {brandInfo}
        <p>Color : {colorInfo}</p>
        {/* Même chose que :
        {color ? <p>Color : {color}</p> : <p>Color : no color</p>} */}
        {/* OU
        <p>Color : {color ? color : "no color"}</p> */}
  
      </div>
    )
  }
    return children && ( 
      <div>
        <p>Brand : {children}</p>
        <p>Color : {colorInfo}</p>
      </div>
    )
}

export default Car;
