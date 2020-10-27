import React, { useState } from 'react'

import { Items } from './Items/Items';

import { categories } from '../../data/categories';
import { data } from '../../data/data';
import { getDataByCategory } from '../../selectors/getDataByCategory';

import './DepartmentsFilter.css';

export const DepartmentsFilter = () => {

    const { products } = data;
    const [ arrayItems, setArrayItems ] = useState(products);
    const [ selectedButton, setSelectedButton ] = useState(['sort-no-focus', 'sort-no-focus']);

    const [ ascendant, descendant ] = selectedButton;
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
        setSelectedButton(['sort-no-focus', 'sort-no-focus']);
    }

    const selectButton = (newButtonClasses, sortBy) => {
        setSelectedButton(newButtonClasses);
        let auxArray = arrayItems;

        if (sortBy === 'A') {
            auxArray.sort(function(a, b) {
                return a.price - b.price;
            })
        }
        else {
            auxArray.sort(function(a, b) {
                return b.price - a.price;
            })
        }

        setArrayItems(auxArray);
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
                        <p>Range: $0 - ${ sliderValue }</p>
                    </div>
                </div>
                <div className="filter-section">
                    <h1>Sort by Price</h1>
                    <div className="sort-buttons">
                        <button 
                            className={ `btn-sort ${ ascendant }` } 
                            onClick={ () => selectButton(['sort-focus', 'sort-no-focus'], 'A') }
                        >
                            Ascendant
                        </button>
                        <button 
                            className={ `btn-sort ${ descendant }` }
                            onClick={ () => selectButton(['sort-no-focus', 'sort-focus'], 'D') }
                        >
                            Descendant
                        </button>
                    </div>
                </div>
            </div>
            <Items items={ arrayItems }/>
        </section>
    )
}
