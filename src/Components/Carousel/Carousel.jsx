import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MovieCard from '../MovieCard/MovieCard';
import './Carousel.css';

const responsive = {
    0: { items: 1.5 },
    568: { items: 2.5 },
    1024: { items: 5.5 }
};

const Carousel = ({ itemsList }) => {
    
    const items = itemsList.map(movie => (
        <MovieCard key={movie.poster} poster={movie.poster} nome={movie.nome} />
    ));
    
    return (
        <AliceCarousel
            className="carousel"
            items={items}
            responsive={responsive}
            disableDotsControls
        />
    );
};

export default Carousel;