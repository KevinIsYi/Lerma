import React from 'react';

import './BannerImage.css';

export const BannerImage = ({ url }) => {

    const backImage = (url === undefined) ? '#E7AB3C' : require(`./${ url }.jpg`);

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
                <h1 className="black-border">Everything for your Laptop</h1>
                <button className="btn center">Botón</button>
            </div>
        </div>
    )
}
