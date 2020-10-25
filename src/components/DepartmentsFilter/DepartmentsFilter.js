import React, { useState } from 'react'

import { data } from '../../data/data';
import { Items } from './Items/Items';

import './DepartmentsFilter.css';

export const DepartmentsFilter = () => {

    const categories = [  'All', 'Books', 'Electronics', 'Foods & Drinks', 'Home & Kitchen', 'Sports & Outdoors', 'Pets' ];
    const [ sliderValue, setSliderValue ] = useState(100);
    const [ range, setRange ] = useState(sliderValue);
    const { products } = data;

    const changeRange = (e) => {
        setSliderValue(e.target.value);
        setRange(sliderValue);
    }


    return (
        <section className="show-categories">
            <div className="filters">
                <div className="filter-section">
                    <h1>Categories</h1>
                    {
                        categories.map(category => (
                            <p key={ category[0] }>{ category }</p>
                        ))
                    }
                </div>
                <div className="filter-section">
                    <h1>Filter by Price</h1>
                    <input className="slider" type="range" min="0" max="15000" value={ sliderValue } onChange={ changeRange }/>
                    <div className="filter-price-slider-options">
                        <button className="btn">Filter</button>
                        <p>Range: $0 - ${ range }</p>
                    </div>
                </div>
            </div>
            <Items items={ products } />
        </section>
    )
}
