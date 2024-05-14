import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <nav className='menu'>
            <a href='/' className='homeMenu'>
                <img src='images/logoBranco.png' alt='logo' className='menuLogo'/>
            </a>           
            <a href='/' className='inicioMenu'>Inicio</a>
            <a href='/' className='filmesMenu'>Filmes</a>
            <a href='/' className='seriesMenu'>Series</a>
            <a href='/' className='bombMenu'>Bombando</a>
            <a href='/' className='mylistMenu'>Minha Lista</a>
        </nav>
    );
};
 
export default Menu;