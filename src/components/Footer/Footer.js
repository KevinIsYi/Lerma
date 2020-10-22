import React from 'react';
import { AboutUs } from './AboutUs/AboutUs';
import { SocialMedia } from './SocialMedia/SocialMedia';

import { footerInfo } from '../../data/footerInfo';
import { InfoSection } from './InfoSection/InfoSection';

import './Footer.css';

export const Footer = () => {

    return (
        <footer className="footer">
            <AboutUs />
            <SocialMedia />

            {
                footerInfo.map(({ h1, p }) => (
                    <InfoSection 
                        key = { h1 }
                        h1 = { h1 }
                        p = { p }
                    />
                ))
            }

        </footer>
    )
}
