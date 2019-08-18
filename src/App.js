import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import { AppContext } from './context/appContext';

import Public from './pages/Public';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import Feed from './pages/Feed';
import NoMatch from './pages/NoMatch';
import Post from './pages/Post';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const App = () => {
    const [auth] = useContext(AppContext);
    const { login } = auth;

    useEffect(() => {
        console.log('App.js >>>>>', auth);
    }, [auth]);

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Public} />
                <Route path="/login" component={Login} />
                <Route path="/forgotPassword" component={ForgotPassword} />
                <Route path="/signup" component={Signup} />
                <Route path="/feed" component={Feed} />
                <Route path="/post" component={Post} />
                <Route path="/profile" component={Profile} />
                <Route path="/settings" component={Settings} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    );
};

export default App;
