import React from 'react';
import Media from 'react-media';

import { VscAccount } from 'react-icons/vsc';
import { GrCart } from 'react-icons/gr';
import { FaBars }  from 'react-icons/fa';

import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {

    const logoImageName = 'lerma-logo';
    const mediaQueries = { // There are regular media querys in the CSS file
        mobile: "(max-width: 900px)",
        desktop: "(min-width: 901px)"
    }

    return (
        <header className="header center">
            <Media queries={ mediaQueries }>
            {
                ({ mobile, desktop }) => (
                    <>
                    {
                        mobile && (
                            <>
                                <FaBars className="icon"/>
                                <Link to="/ ">
                                    <img className="lerma-logo" src={ `./assets/icons/${ logoImageName }.png` } alt={ logoImageName } />
                                </Link>
                                <GrCart className="icon" />
                            </>
                        )
                    }
                    {
                        desktop && (
                            <>
                                <Link to="/ ">
                                    <img className="lerma-logo" src={ `./assets/icons/${ logoImageName }.png` } alt={ logoImageName } />
                                </Link>
                                <div className="menu center-text">
                                    <Link to="/categories"><p className="header-menu">Departments</p></Link>
                                    <p className="header-menu">About Us</p>
                                    <p className="header-menu">Shop</p>
                                    <p className="header-menu">Contact</p>
                                </div>
                                <div className="sign-in-section">
                                    <Link to="/login"><VscAccount className="icon" /></Link>
                                    <div className="division" />
                                    <GrCart className="icon" />
                                </div>
                            </>
                        )
                    }
                    </>
                )
            }
            </Media>
        </header>
    )
}
