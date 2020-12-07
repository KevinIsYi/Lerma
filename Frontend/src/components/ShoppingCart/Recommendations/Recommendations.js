import React, { useEffect, useState } from 'react';

import './Recommendations.css';

export const Recommendations = ({ items, setCartItems, calculateTotal }) => {
    
    const [ recommendations, setRecommendations ] = useState([]);
    console.log("Generar");

    const getRecommendations = async(items) => {
        const url = 'http://localhost:4000/api/graph/getgraph';

        console.log("mandar: ", items.map(({ _id }) => _id));

        const req = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                scitems: items.map(({ _id }) => _id)
            })
        });
        const { ok, recommendations } = await req.json();

        if (ok) {
            const aux = recommendations.sort((a, b) => b.weight - a.weight);
            setRecommendations(aux.slice(0, 5));
            calculateTotal(items)
        }
    }

    const addToCart = (_id, img, name, price) => {
        console.log("Se entra a la funcion");
        const scItems = JSON.parse(localStorage.getItem('scitems'));
        scItems.push({ img, name, price, quantity: 1, _id });
        setCartItems(scItems);
        console.log("Asi queda: ", scItems);
        localStorage.setItem('scitems', JSON.stringify(scItems));
        getRecommendations(scItems);
    }

    const editName = (name) => name.length > 45 ? name.slice(0, 45) + '...' : name;

    useEffect(() => {
        getRecommendations(items);
    }, [  ] );

    return (
        <div className="cart-recomendations">
            <h1>Our Recommendations</h1>
            <div className="recommendation">
            {
                recommendations.map(({ item:{ _id, img, name, price } }) => (
                    <div className="recommendation-info" key={ _id }>
                        <img 
                            src={ `./assets/items/${ img }.jpg`} 
                            alt={ name } 
                            onClick={ () => addToCart(_id, img, name, price)}
                        />
                        <h1>{ editName(name) }</h1>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
