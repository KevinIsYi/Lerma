import React from 'react'

import { data } from '../../data/data';
import './DepartmentsFilter.css';
import { Items } from './Items/Items';

export const DepartmentsFilter = () => {

    const categories = [  'All', 'Books', 'Electronics', 'Foods & Drinks', 'Home & Kitchen', 'Sports & Outdoors', 'Pets' ];
    const { products } = data;

    const changeRange = () => {
        //console.log("Cambio");
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
                    <input className="slider" type="range" min="0" max="500" onChange={ changeRange }/>
                    <div className="filter-price-slider-options">
                        <button className="btn">Filter</button>
                        <p>Range: $0 - $15000</p>
                    </div>
                </div>
            </div>
            <Items items={ products } />
        </section>
    )
}
