import React from 'react';

import { 
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect
} from 'react-router-dom';

import { FilterCategoriesScreen } from '../components/FilterCategoriesScreen/FilterCategoriesScreen';
import { LandingScreen } from '../components/LandingScreen/LandingScreen';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';



export const LandingPageRouter = () => {



    return (
        <>
            <Header />

                <>
                    <Switch>
                        <Route path="/ " component={ LandingScreen } />
                        <Route exact path="/categories" component={ FilterCategoriesScreen } />

                        <Redirect to="/ " />
                    </Switch>
                </>
            
            <Footer />
        </>
    )
}
