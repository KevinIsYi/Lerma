import React, { useState } from 'react'

import { Items } from './Items/Items';

import { data } from '../../data/data';
import { getDataByCategory } from '../../selectors/getDataByCategory';

import './DepartmentsFilter.css';

export const DepartmentsFilter = () => {

    const categories = [
        {
            id: '0',
            category: 'All'
        },
        {
            id: 'L',
            category: 'Books'
        },
        {
            id: 'E',
            category: 'Electronics'
        },
        {
            id: 'A',
            category: 'Foods & Drinks'
        },
        {
            id: 'H',
            category: 'Home & Kitchen'
        },
        {
            id: 'D',
            category: 'Sports & Outdoors'
        },
        {
            id: 'P',
            category: 'Pets'
        }
    ];

    const { products } = data;
    const [ arrayItems, setArrayItems ] = useState(products);

    const [ values, setValues ] = useState({
        text: '',
        sliderValue: 15000,
        currentKey: '0'
    });

    const { sliderValue } = values;

    const changeRange = (e) => {
        setValues({
            ...values,
            sliderValue: e.target.value
        });
        setArrayItems(getDataByCategory({...values, sliderValue: e.target.value}))
    }

    const categoryClic = (id) => {
        setValues({
            ...values,
            currentKey: id,
        });
        setArrayItems(getDataByCategory({...values, currentKey: id})); 
    }

    return (
        <section className="show-categories">
            <div className="filters">
                <div className="filter-section">
                    <h1>Categories</h1>
                    {
                        categories.map(({ id, category }) => (
                            <p key={ id } onClick={ () => categoryClic(id) }>{ category } </p>
                        ))
                    }
                </div>
                <div className="filter-section">
                    <h1>Filter by Price</h1>
                    <input className="slider" type="range" min="0" max="15000" value={ sliderValue } onChange={ changeRange }/>
                    <div className="filter-price-slider-options">
                        <button className="btn">Filter</button>
                        <p>Range: $0 - ${ sliderValue }</p>
                    </div>
                </div>
            </div>
            <Items items={ arrayItems }/>
        </section>
    )
}
