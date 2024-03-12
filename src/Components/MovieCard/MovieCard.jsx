import React from 'react';
import './MovieCard.css';

const MovieCard = ({ poster, nome }) => {
  return ( 
    <div className="movie-card">
        <img src={poster} alt={nome} />
    </div>
  );
};

export default MovieCard;
