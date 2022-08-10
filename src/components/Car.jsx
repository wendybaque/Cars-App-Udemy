import React from 'react';
import Wrapper from './Wrapper'

function Car({children, color}) {
  // const brandInfo = children ? (<p>Brand : {children}</p>) : (<p> Brand : undefined</p>)
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
    return children && ( 
      <div>
        <Wrapper>
          <p>Brand : {children}</p>
          <p>Color : {colorInfo}</p>
        </Wrapper>
      </div>
    )
}
}

export default Car;
