import React from 'react';
import Wrapper from './Wrapper'

const Car = ({children, color}) => {
  let colorInfo = "";
  if(color) {
    colorInfo = color;
  } else {
    colorInfo = 'no color';
  }

    return children && ( 
        <Wrapper>
          <p>Brand : {children}</p>
          <p>Color : {colorInfo}</p>
        </Wrapper>
    )
}

export default Car;
