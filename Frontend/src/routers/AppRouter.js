import React from 'react'

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { LandingPageRouter } from './LandingPageRouter';
import { LogInScreen } from '../components/LogInScreen/LogInScreen';

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
