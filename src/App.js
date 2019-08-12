import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MasterContext } from './Context';
import Public from './pages/Public';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Feed from './pages/Feed';
import NoMatch from './pages/NoMatch';

const App = () => {
    const [auth] = useContext(MasterContext);

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Public} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/feed" component={Feed} />
                <Route component={NoMatch} />
            </Switch>
        </Router>
    );
};

export default App;
