import React, { useState, createContext } from 'react';

import defaultContext from './defaultContext';

export const AppContext = createContext({
    ...defaultContext
});

export const ContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        ...defaultContext
    });

    return (
        <AppContext.Provider value={[auth, setAuth]}>
            {children}
        </AppContext.Provider>
    );
};
