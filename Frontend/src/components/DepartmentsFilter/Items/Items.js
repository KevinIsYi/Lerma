import React from 'react';

import './Items.css';

export const Items = ({ items = []}) => {

    return (
        <div className="items-list">
            {
                items.map(({ _id, img, name, price }) => (
                    <div className="card-item" key={ _id } >
                        <img src={ `./assets/items/${ img }.jpg` } alt={ img }/>
                        <h1>{ name }</h1>
                        <div className="price-see">
                            <p>${ price }</p>
                            <p>See</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
