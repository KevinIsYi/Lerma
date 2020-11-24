import React, { useState } from 'react';
import { UserContext } from './hooks/useUserContext';
import { AppRouter } from './routers/AppRouter';

export const App = () => {

    const [ isLogged, setLogged ] = useState(false);

    return (
        <UserContext.Provider value={{ isLogged, setLogged }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
