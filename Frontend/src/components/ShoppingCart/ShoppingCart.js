import React, { useContext, useEffect, useState } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { UserContext } from '../../hooks/useUserContext';

import './ShoppingCart.css';

export const ShoppingCart = () => {

    const [ cartItems, setCartItems ] = useState([]);
    const { isLogged } = useContext(UserContext);
    const [ total, setTotal ] = useState(0);

    const getCartItems = async () => {
        const url = 'http://localhost:4000/api/cart/getcart';
        const resp = await fetch(url, {
            method: 'GET',
            headers: {
                'userid': isLogged
            }
        });
        const { ok, cartItems } = await resp.json();
        if ( ok ) {
            setCartItems(cartItems);
            
            let tota = 0;
            cartItems.forEach(({ quantity, price }) => {
                tota += (quantity * price);
            })
            setTotal(tota);

        }
    }
    useEffect( () => {
        getCartItems();
    }, [])

    const clickedNumberItems = (id, quantity, value, index) => {
        const newQuantity = Math.max(0, quantity + value);
        const { price } = cartItems[index];
        const totalBefore = cartItems[index].quantity * price;
        setCartItems(cartItems.map(item => item._id === id ? { ...item, quantity: newQuantity } : item));
        const newTotal = newQuantity * price;

        setTotal(total + (newTotal - totalBefore));
    }

    return (
        <div className="shopping-cart-section">
            <div className="total-section">
                <div className="div-total-description">
                    <p>Total: </p>
                    <h1>${ total.toFixed(2) }</h1>
                </div>
                <button className="btn btn-total">Pay</button>
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
