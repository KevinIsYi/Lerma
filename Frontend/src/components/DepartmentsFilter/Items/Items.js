import React, { useContext } from 'react';
import { GrCart } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../hooks/useUserContext';

import './Items.css';

export const Items = ({ items = []}) => {

    const { isLogged } = useContext(UserContext);

    const addToCart = ( id, img, name, price ) => {
        const items = JSON.parse(localStorage.getItem('scitems'));
        let find = false;
        items.forEach(( item, index ) => {
            if (item._id === id) {
                const { quantity } = item;
                items[index].quantity = quantity + 1;
                find = true;
            }
        });

        if (!find) {
            items.push({ _id: id, img, name, price, quantity: 1 });
        }
        localStorage.setItem('scitems', JSON.stringify(items));
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
                                        onClick={ () => addToCart(_id, img, name, price)}
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
