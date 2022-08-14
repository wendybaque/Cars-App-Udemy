import React from 'react';
import carpng from '../assets/carpng.png';
// import carsvg from '../assets/carsvg.svg';


function CarImg() {
  return (
    <div>
        <img className="carImg" src={carpng} alt="icone de voiture"/>
        {/* Revoir vidéo 40 pour modification d'une image svg */}
    </div>
  )
}

export default CarImg;
