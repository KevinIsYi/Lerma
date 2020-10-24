import React from 'react';

import './PriceFilter.css';

export const PriceFilter = () => {

    const changeRange = () => {
        console.log("Cambio");
    }

    return (
        <div className="filter-section">
            <h1>Filter by Price</h1>
            <input className="slider" type="range" min="0" max="500" onChange={ changeRange }/>
            <div className="filter-price-slider-options">
                <button className="btn">Filter</button>
                <p>Range: $0 - $400</p>
            </div>
        </div>
    )
}
