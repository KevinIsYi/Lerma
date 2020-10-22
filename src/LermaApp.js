import React from 'react';

import { Background } from './components/Background/Background';
import { BannerImage } from './components/BannerImage/BannerImage';
import { Cards } from './components/Cards/Cards';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { LermaPros } from './components/LermaPros/LermaPros';
import { SearchBar } from './components/SearchBar/SearchBar';


export const LermaApp = () => {
    return (
        <>
            <Header />
            <SearchBar />
            <BannerImage />
            <Cards />
            <Background />
            <LermaPros />
            <Footer />
        </>
    )
}