import React from 'react';

// import { Background } from './components/Background/Background';
import { BannerImage } from './components/BannerImage/BannerImage';
import { DepartmentsFilter } from './components/DepartmentsFilter/DepartmentsFilter';
// import { Cards } from './components/Cards/Cards';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
// import { LermaPros } from './components/LermaPros/LermaPros';
// import { SearchBar } from './components/SearchBar/SearchBar';


export const LermaApp = () => {

    return (
        <>
            <Header />
            <BannerImage
                image="categories-banner"
                imageText="New Pets Items"
                botonText="Shop"
            />
            <DepartmentsFilter />
            <Footer />
{/*         
        <Header />
        <SearchBar />
        <BannerImage 
            image="BannerImage" 
            imageText="Everything for your Laptop"
            botonText="Shop"/>
        <Cards />
        <Background />
        <LermaPros />
        <Footer />
         */}
        </>
    )
}