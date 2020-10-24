import React from 'react';

export const CategoriesFilter = () => {

    const categories = [ 
            'All', 
            'Books', 
            'Electronics', 
            'Foods & Drinks',
            'Home & Kitchen',
            'Sports & Outdoors',
            'Pets' 
    ];

    return (
        <div className="filter-section">
            <h1>Categories</h1>
            {
                categories.map(category => (
                    <p key={ category[0] }>{ category }</p>
                ))
            }

        </div>
    )
}
