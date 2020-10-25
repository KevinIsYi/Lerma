import React, { useState } from 'react'

import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { LandingPageRouter } from './LandingPageRouter';
import { LogInScreen } from '../components/LogInScreen/LogInScreen';
import { UserContext } from '../UserContext';

export const AppRouter = () => {

    const [isLogged, setLogged] = useState(false);

    return (
        <UserContext.Provider value={{ isLogged, setLogged }}>
            <Router>
                <>
                    <Switch>
                            <Route exact path="/login" component={ LogInScreen } />
                            <Route path="/" component={ LandingPageRouter }/>

                    </Switch>
                </>
            </Router>
        </UserContext.Provider>
    )
}