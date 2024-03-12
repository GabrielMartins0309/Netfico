import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../App.js';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.css';

const MoviesList = ({titulo}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Movies"));
                const moviesData = querySnapshot.docs.map(doc => doc.data());
                setMovies(moviesData);
            } catch (error) {
                console.error("Erro ao carregar filmes:", error);
            }
        };

        loadMovies();
    }, []);

    return (
        <div>
            <h1>{titulo}</h1>
            <div className="movies-container">
                {movies.map(movie => (
                    <MovieCard key={movie.poster} poster={movie.poster} nome={movie.nome}/>
                ))}
            </div>
        </div>
    );
};

export default MoviesList;
