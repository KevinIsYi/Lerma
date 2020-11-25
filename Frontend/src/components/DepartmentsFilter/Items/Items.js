import React, { useContext } from 'react';
import { GrCart } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../hooks/useUserContext';

import './Items.css';

export const Items = ({ items = []}) => {

    const { isLogged } = useContext(UserContext);

    const addToCart = async ( itemId ) => {
        const url = 'http://localhost:4000/api/cart'

        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                userId: isLogged,
                itemId,
                quantity: 1
            })
        })
        const res = await resp.json();
        console.log(res);
    }

    return ( 
        <div className="items-list">
            {
                items.map(({ _id, img, name, price }) => (
                    <div className="card-item" key={ _id } >
                        <img src={ `./assets/items/${ img }.jpg` } alt={ img }/>
                        <h1>{ name }</h1>
                        <div className="price-see">
                            <p>${ price }</p>
                            { 
                                !isLogged
                                ?
                                    <Link to='/login'><p><GrCart className="sent-sc" /></p></Link>
                                :
                                    <p
                                        onClick={ () => addToCart(_id)}
                                    >
                                        <GrCart className="sent-sc" />
                                    </p>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
