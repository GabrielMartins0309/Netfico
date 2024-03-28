import React, { Suspense } from 'react';
import './Home.css';
import MoviesList from '../../Components/MoviesList/MoviesList';

const Home = () => {
  return ( 
    <>
      <MoviesList titulo="Todos os filmes"/>
      <MoviesList titulo="Suspense" genero="Suspense"/>
      <MoviesList titulo="Drama" genero="Drama"/>
      <MoviesList titulo="Romance" genero="Romance"/>
    </>
  );
};

export default Home;
