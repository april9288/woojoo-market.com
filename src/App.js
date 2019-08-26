import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Public = lazy(() => import('./pages/Public'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));

const Feed = lazy(() => import('./pages/Feed'));
const Post = lazy(() => import('./pages/Post'));
const Profile = lazy(() => import('./pages/Profile'));

const Like = lazy(() => import('./pages/Like'));
const Cart = lazy(() => import('./pages/Cart'));
const Order = lazy(() => import('./pages/Order'));
const Sale = lazy(() => import('./pages/Sale'));
const Settings = lazy(() => import('./pages/Settings'));

const NoMatch = lazy(() => import('./pages/NoMatch'));

const App = () => (
    <Router>
        <Switch>
            <Suspense fallback={<section>Loading...</section>}>
                <Route exact path="/" component={Public} />

                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/forgotPassword" component={ForgotPassword} />

                <Route path="/feed" component={Feed} />
                <Route path="/post" component={Post} />
                <Route path="/profile" component={Profile} />

                <Route path="/like" component={Like} />
                <Route path="/cart" component={Cart} />
                <Route path="/order" component={Order} />
                <Route path="/sale" component={Sale} />
                <Route path="/settings" component={Settings} />
            </Suspense>
            <Route component={NoMatch} />
        </Switch>
    </Router>
);

export default App;
