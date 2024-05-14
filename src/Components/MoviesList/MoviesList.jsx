import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../App.js';
import Carousel from '../Carousel/Carousel.jsx';
import './MoviesList.css';

const MoviesList = ({titulo, genero}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                if (genero) {
                    const querySnapshot = await getDocs(collection(db, "Movies"));
                    const moviesData = [];
                    querySnapshot.forEach((doc) => {
                        const data = doc.data();
                        if (Array.isArray(data.genero) && data.genero.includes(genero)) {
                            moviesData.push(data);
                        }
                    });
                    setMovies(moviesData);
                }
                else {
                    const querySnapshot = await getDocs(collection(db, "Movies"));
                    const moviesData = querySnapshot.docs.map(doc => doc.data());
                    setMovies(moviesData);
                }
            } catch (error) {
                console.error("Erro ao carregar filmes:", error);
            }
        };

        loadMovies();
    }, []);

    return (
        <div>
            <p className='tituloSection'>{titulo}</p>
            <section className="movies-container">
                <Carousel itemsList={movies}/>
            </section>
        </div>
    );        
};

export default MoviesList;
