import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { AppContext } from './context/appContext';

import Public from './pages/Public';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import Feed from './pages/Feed';
import NoMatch from './pages/NoMatch';
import Post from './pages/Post';
import Profile from './pages/Profile';

import Like from './pages/Like';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Sale from './pages/Sale';

import Settings from './pages/Settings';

const App = () => {
    // const [auth] = useContext(AppContext);
    // useEffect(() => {
    //     console.log('App.js >>>>>', auth);
    // }, [auth]);

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

                <Route path="/like" component={Like} />
                <Route path="/cart" component={Cart} />
                <Route path="/order" component={Order} />
                <Route path="/sale" component={Sale} />

                <Route path="/settings" component={Settings} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    );
};

export default App;
