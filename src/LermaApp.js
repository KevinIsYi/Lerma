import React from 'react';

import { Background } from './components/Background/Background';
import { BannerImage } from './components/BannerImage/BannerImage';
import { DepartmentsFilter } from './components/DepartmentsFilter/DepartmentsFilter';
import { Cards } from './components/Cards/Cards';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Login } from './components/LogIn/Login';
import { LermaPros } from './components/LermaPros/LermaPros';
import { SearchBar } from './components/SearchBar/SearchBar';


export const LermaApp = () => {

//         <Header />
// <SearchBar />
// <BannerImage 
//     image="BannerImage" 
//     imageText="Everything for your Laptop"
//     botonText="Shop"/>
// <Cards />
// <Background />
// <LermaPros />
// <Footer />




    // <Login />

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
        </>
    )
}