import React, { useState } from 'react';

import { VscAccount } from 'react-icons/vsc';
import { GrCart } from 'react-icons/gr';

import './Header.css';

export const Header = () => {

    const logoImageName = 'lerma-logo';

    const [size, setSize] = useState(window.innerWidth);
    const [change, setChange] = useState(false);


    return (
        <header className="header container center">
            <img className="lerma-logo" src={ `./assets/icons/${ logoImageName }.png` } alt={ logoImageName } />
            <div className="menu center-text">
                <p className="header-menu">Departments</p>
                <p className="header-menu">About Us</p>
                <p className="header-menu">Shop</p>
                <p className="header-menu">Contact</p>
            </div>
            <div className="sign-in-section">
                <VscAccount className="icon" />
                <div className="division" />
                <GrCart className="icon" />
            </div>
        </header>
    )
}
