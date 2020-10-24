import React from 'react'
import { CategoriesFilter } from './CategoriesFilter/CategoriesFilter'
import { PriceFilter } from './PriceFilter/PriceFilter'

import './DepartmentsFilter.css';

export const DepartmentsFilter = () => {

    return (
        <section className="show-categories">
            <div className="filters">
                <CategoriesFilter />
                <PriceFilter />
            </div>
        </section>
    )
}
