import React from 'react';
import PropTypes from 'prop-types';

import './BannerImage.css';

export const BannerImage = ({ image, imageText, botonText }) => {

    const backImage = (image === undefined) ? '#E7AB3C' : require(`./${ image }.jpg`);

    const imgSection = {
        backgroundColor: backImage,
        backgroundImage: `url(${ backImage })`, // Won't be valid css if url is undefined, so it won't be applied
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '50vh',
        margin: '40px 0',
        position: 'relative',
        textAlign: 'center'
    };

    return (
        <div style={ imgSection }>
            <div className="inside-img">
                <h1 className="black-border">{ imageText }</h1>
                <button className="btn center">{ botonText }</button>
            </div>
        </div>
    )
}


BannerImage.propTypes = {
    imageText: PropTypes.string.isRequired,
    botonText: PropTypes.string.isRequired
}