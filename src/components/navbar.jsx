import React from 'react';
import CartWidget from './CartWidget';
import './navbar.css'

const NavBar = () => {
    return (
        <header>
            <h1>SUPER MERCADO</h1>
            <nav>
                <ul>
                    <li><a href="#">Categoría 1</a></li>
                    <li><a href="#">Categoría 2</a></li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    );
};

export default NavBar;