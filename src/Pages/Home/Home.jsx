import React from 'react';
import './Home.css';
import MoviesList from '../../Components/MoviesList/MoviesList';

const Home = () => {
  return ( 
    <>
      <MoviesList titulo="Suspense"/>
      <MoviesList titulo="Drama"/>
      <MoviesList titulo="Romance"/>
    </>
  );
};

export default Home;
