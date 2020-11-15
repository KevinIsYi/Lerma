import React from 'react';

import { cards} from '../../data/cards';
import { Card } from '../Card/Card';

import './Cards.css';

export const Cards = () => {

    return (
        <>
            <h1 className="departments-h1 center-text">Our Deparments</h1>
            <div className="landing-cards">
            {
                cards.map(card => (
                    <Card 
                        key = { card.name }
                        card = { card }
                    />
                ))
            }    
            </div> 
        </>
    )
}
