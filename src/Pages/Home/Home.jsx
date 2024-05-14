import React from 'react';
import './Home.css';
import MoviesList from '../../Components/MoviesList/MoviesList';
import Menu from '../../Components/Menu/Menu';

const Home = () => {
  return ( 
    <>  
      <Menu />
      <MoviesList titulo="Todos os filmes"/>
      <MoviesList titulo="Suspense" genero="Suspense"/>
      <MoviesList titulo="Drama" genero="Drama"/>
      <MoviesList titulo="Romance" genero="Romance"/>
    </>
  );
};

export default Home;
