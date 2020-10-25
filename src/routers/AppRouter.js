import React from 'react'

import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { LogInScreen } from '../components/LogInScreen/LogInScreen';


import { LandingPageRouter } from './LandingPageRouter';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Switch>
                        <Route exact path="/login" component={ LogInScreen } />
                        <Route path="/" component={ LandingPageRouter }/>

                </Switch>
            </>
        </Router>
    )
}
