import React, { useEffect, useState } from 'react'

import { Items } from './Items/Items';

import { categories } from '../../data/categories';
import { getDataByCategory } from '../../selectors/getDataByCategory';

import './DepartmentsFilter.css';

export const DepartmentsFilter = () => {

    const [ arrayItems, setArrayItems ] = useState([  ]);
    const [ selectedButton, setSelectedButton ] = useState(['sort-no-focus', 'sort-no-focus']);
    const [ products, setProducts ] = useState([]);

    const [ ascendant, descendant ] = selectedButton;
    const [ values, setValues ] = useState({
        text: '',
        sliderValue: 15000,
        currentKey: '0'
    });

    const { text, sliderValue } = values;

    const changeInput = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
        setArrayItems(getDataByCategory(products, {...values, [ target.name ]: target.value}))
    }

    const categoryClic = (id) => {
        setValues({
            text: '',
            sliderValue,
            currentKey: id,
        });
        setArrayItems(getDataByCategory(products, {sliderValue, text: '', currentKey: id}));
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

    const getItems = async () => {
        const url = 'http://localhost:4000/api/item/all';
        const resp = await fetch(url);
        const res = await resp.json();
        
        const { items } = res;
        setArrayItems(items);
        setProducts(items);
    }

    useEffect(() => { // Petition to backend, [  ] means it will be executed only once
        getItems();
    }, [ ]);

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
                    <input className="slider" type="range" min="0" max="15000" name="sliderValue" value={ sliderValue } onChange={ changeInput }/>
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
                <div className="filter-section">
                    <h1>Find by Name</h1>
                    <input 
                        className="filter-by-name"
                        type="text" 
                        placeholder="Love Lerma"
                        name="text"
                        value={ text }
                        onChange={ changeInput }
                    />
                </div>
            </div>
            <div className="results-section">
                <h2>Results</h2>
                <Items items={ arrayItems }/>
            </div>
        </section>
    )
}
