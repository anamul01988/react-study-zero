import React from 'react';
import logo from '../../img/header/logo.webp';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="from img" />
            <nav>
                <a href="/Courses">Courses</a>
                <a href="/Courses-schedule">Courses-schedule</a>
                <a href="/Course-guideline">Courses-guideline</a>
                <a href="/Course-cart">Courses-cart</a>
                <a href="/manage">Order & manage</a>
            </nav>

        </div>
    );
}

export default Header;