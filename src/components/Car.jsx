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
          <tr>
            <td>Brand : {name}</td>
            <td>Color : {colorInfo}</td>
            <td>Car age : {year}</td>
          </tr>
        </Wrapper>
    )
}

export default Car;
