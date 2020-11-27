import React, { useContext, useState } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { UserContext } from '../../hooks/useUserContext';

import './ShoppingCart.css';

export const ShoppingCart = () => {

    const items = JSON.parse(localStorage.getItem('scitems') || [])
    const [ cartItems, setCartItems ] = useState(items);
    const { isLogged } = useContext(UserContext);

    const calculateTotal = () => {
        let total = 0;
        items.forEach(({ price, quantity }) => {
            total += (price * quantity);
        })
        return total;
    }

    const [ total, setTotal ] = useState(calculateTotal());


    const clickedNumberItems = (id, quantity, value, index) => {
        const newQuantity = Math.max(0, quantity + value);
        const { price } = cartItems[index];
        const totalBefore = cartItems[index].quantity * price;
        const auxArray = cartItems.map(item => item._id === id ? { ...item, quantity: newQuantity } : item)
        setCartItems(auxArray);
        const newTotal = newQuantity * price;

        setTotal(total + (newTotal - totalBefore));
        localStorage.setItem('scitems', JSON.stringify(auxArray));
    }

    const pay = async () => {

        const url = 'http://localhost:4000/api/cart/setcart'
        const req = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                userId: isLogged,
                items: cartItems
            })
        });

        const { ok } = await req.json();
        if (ok) {
            setCartItems([]);
            setTotal(0);
            localStorage.setItem('scitems', JSON.stringify([]));
        }

    }

    return (
        <div className="shopping-cart-section">
            <div className="total-section">
                <div className="div-total-description">
                    <p>Total: </p>
                    <h1>${ total.toFixed(2) }</h1>
                </div>
                <button 
                    className="btn btn-total"
                    onClick={ pay }
                >
                    Pay
                </button>
            </div>
            <div className="shopping-cart-items">
                { 
                    cartItems.map(({ _id, img, name, price, quantity }, index) => (
                        <div className="shopping-cart-item" key={ _id }>
                            <img src={`./assets/items/${ img }.jpg`} alt={ img } />
                            <div className="description-price">
                                <h1>{ name } </h1>
                                <p><span># Items:</span> { quantity }</p>
                                <p><span>Unit Price:</span> ${ price }</p>
                                <p><span>Total:</span> ${ (quantity * price).toFixed(2) }</p>
                                <AiFillMinusCircle 
                                    className="icon sc-icon" 
                                    onClick={ () => { clickedNumberItems( _id, quantity, -1, index ) } }
                                />
                                <AiFillPlusCircle 
                                    className="icon sc-icon" 
                                    onClick={ () => { clickedNumberItems( _id, quantity, 1, index ) }}
                                />
                            </div>
                        </div>
                    )) 
                }
            </div>
        </div>
    )
}
