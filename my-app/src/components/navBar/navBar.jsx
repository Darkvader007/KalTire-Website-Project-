// src/Header.js
import React from 'react';
import '../navBar/navBar.css';
import KalTireLogo from '../../Assets/KalTire-Logo.png';
import Cart from '../../Assets/fluent-cart.png';





const NavBar = () => {
return (
    <header className="header">
    <div className="logo">
        <a href='#home'><img src={KalTireLogo} alt="Kal Tire Logo" /></a>
    </div>
    <nav className="nav">
        <ul>
        <li><a href="#products">Products</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#locations">Locations</a></li>
        <li><a href="#promotions">Promotions</a></li>
        </ul>
    </nav>

    <div className="search">
        <input type="text" placeholder="What are you looking for?" />
        {/* <button type="submit">Search</button> */}
    </div>

    <div className="icons">
        <a href="#cart" className='cart-icon'><img src={Cart} alt="Cart" /></a>
        <a href="#book-tire-change" className="book-btn">Book A Tire Change</a>
        <a href="#signin" className='signIn-btn'>Sign In</a>
    </div>
    </header>
);
};

export default NavBar;
