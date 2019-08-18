import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

import { ApiAuthentication } from '../api/auth';
import defaultContext from './defaultContext';

export const AppContext = createContext({
    ...defaultContext
});

export const ContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        ...defaultContext
    });

    useEffect(() => {
        ApiAuthentication(
            axios,
            'get',
            '/api/checkAuth',
            null,
            auth,
            setAuth,
            'AUTH_ERROR'
        );

        return () => {
            setAuth(defaultContext);
        };
    }, []);

    return (
        <AppContext.Provider value={[auth, setAuth]}>
            {children}
        </AppContext.Provider>
    );
};
