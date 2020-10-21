import React from 'react';

import { BannerImage } from './components/BannerImage/BannerImage';
import { Cards } from './components/Cards/Cards';
import { Header } from './components/Header/Header';
import { SearchBar } from './components/SearchBar/SearchBar';


export const LermaApp = () => {
    return (
        <>
            <Header />
            <SearchBar />
            <BannerImage />
            <Cards />
        </>
    )
}