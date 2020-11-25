import React, { useContext } from 'react';

import { 
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { FilterCategoriesScreen } from '../components/FilterCategoriesScreen/FilterCategoriesScreen';
import { LandingScreen } from '../components/LandingScreen/LandingScreen';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart';
import { UserContext } from '../hooks/useUserContext';

export const LandingPageRouter = () => {

    const { isLogged } = useContext(UserContext);

    return (
        <>
            <Header />
                <>
                    <Switch>
                        <Route path="/ " component={ LandingScreen } />
                        <Route exact path="/categories" component={ FilterCategoriesScreen } />
                        { isLogged && <Route exact path="/cart" component={ ShoppingCart } /> }

                        <Redirect to="/ " />
                    </Switch>
                </>
            
            <Footer />
        </>
    )
}
