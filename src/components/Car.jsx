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
  const colorInfo = color ? (<p>Color : {color}</p>) : (<p>Color : no color</p>);
  return (
    <div style={{
      backgroundColor:'lightblue',
      width:'400px',
      padding: '10px',
      margin: '5px auto'
      }}>
      {brandInfo}
      {colorInfo}
    </div>
  )
}

export default Car;
