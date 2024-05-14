import React, { useState } from 'react';
import './Search.css';
import Menu from '../../Components/Menu/Menu';
import MovieCard from '../../Components/MovieCard/MovieCard';

const Search = () => {
    const [search, setSearch] = useState('');
    const [responseData, setResponseData] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();

        fetch(`https://www.omdbapi.com/?apikey=b23d4975&t=${search}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setResponseData(data);
            })
            .catch(error => console.error(error));
    }

    return (
        <>
            <Menu />
            <section className="sectionSearch">
                <nav className="navSearch">
                    <input type="text" className="inputSearch" value={search} 
                        placeholder='Digite o nome do filme'
                        onChange={e => setSearch(e.target.value)} />
                    <input type="submit" className="buttonSearch" 
                        value="Buscar" onClick={handleSearch} />
                </nav>
                {responseData && (
                    <MovieCard poster={responseData.Poster} nome={responseData.Title} className="movieCardSearch" />
                )}
            </section>
        </>
    );
};

export default Search;