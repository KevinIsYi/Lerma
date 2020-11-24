import React from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

import './ShoppingCart.css';

export const ShoppingCart = () => {
    return (
        <div className="shopping-cart-section">
            <div className="total-section">
                <div className="div-total-description">
                    <p>Total: </p>
                    <h1>$129</h1>
                </div>
                <button className="btn btn-total">Pay</button>
            </div>
            <div className="shopping-cart-items">
                <div className="shopping-cart-item">
                    <img src="./assets/items/AB01.jpg" alt="AB01" />
                    <div className="description-price">
                        <h1>M&M'S Strawberry Nut Family Size Limited Edition (521g)</h1>
                        <p><span># Items:</span> 5</p>
                        <p><span>Unit Price:</span> $125</p>
                        <p><span>Total:</span> $625</p>
                        <AiFillMinusCircle className="icon sc-icon" />
                        <AiFillPlusCircle className="icon sc-icon" />
                    </div>
                </div>
                <div className="shopping-cart-item">
                    <img src="./assets/items/AB01.jpg" alt="AB01" />
                    <div className="description-price">
                        <h1>M&M'S Strawberry Nut Family Size Limited Edition (521g)</h1>
                        <p><span># Items:</span> 5</p>
                        <p><span>Unit Price:</span> $125</p>
                        <p><span>Total:</span> $625</p>
                        <AiFillMinusCircle className="icon sc-icon" />
                        <AiFillPlusCircle className="icon sc-icon" />
                    </div>
                </div>
                <div className="shopping-cart-item">
                    <img src="./assets/items/AB01.jpg" alt="AB01" />
                    <div className="description-price">
                        <h1>M&M'S Strawberry Nut Family Size Limited Edition (521g)</h1>
                        <p><span># Items:</span> 5</p>
                        <p><span>Unit Price:</span> $125</p>
                        <p><span>Total:</span> $625</p>
                        <AiFillMinusCircle className="icon sc-icon" />
                        <AiFillPlusCircle className="icon sc-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
