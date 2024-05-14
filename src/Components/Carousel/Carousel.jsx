import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MovieCard from '../MovieCard/MovieCard';
import './Carousel.css';

const Carousel = ({ itemsList }) => {
    
    const items = itemsList.map(movie => (
        <MovieCard key={movie.poster} poster={movie.poster} nome={movie.nome} />
    ));
    
    return (
        <AliceCarousel
        className="carousel"
        items={items}
        mouseTracking
        infinite
        disableButtonsControls
        autoWidth
        />
    );
};

export default Carousel;