import React from 'react';
import Wrapper from './Wrapper'

const Car = ({name, color, year}) => {
  let colorInfo = "";
  if(color) {
    colorInfo = color;
  } else {
    colorInfo = 'no color';
  }

    return name && ( 
        <Wrapper>
          <p>Brand : {name}</p>
          <p>Color : {colorInfo}</p>
          <p>Car age : {year}</p>
        </Wrapper>
    )
}

export default Car;
