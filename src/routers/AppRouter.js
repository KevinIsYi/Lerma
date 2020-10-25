import React from 'react'

import { 
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect
} from 'react-router-dom';

import { LoginScreen } from '../components/LoginScreen/LoginScreen';
import { LandingPageRouter } from './LandingPageRouter';

export const AppRouter = () => {
    return (
        <Router>
                <Switch>
                    <>
                        <Route exact path="/login" component={ LoginScreen } />
                        <Route path="/" component={ LandingPageRouter }/>

                    </>
                </Switch>
        </Router>
    )
}
