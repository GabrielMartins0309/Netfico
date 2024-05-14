import React from 'react';
import './MovieCard.css';
import { useState } from 'react';

const MovieCard = ({ poster, nome }) => {
  const [hovered, setHovered] = useState(false);

  const hoverOn = () => {
    setHovered(true);
  }
  const hoverOff = () => {
    setHovered(false); 
  }
  
  return ( 
    <div className={`movie-card ${hovered ? 'hovered' : ''}`} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
        <img src={poster} alt={nome} />
    </div>
  );
};

export default MovieCard;
