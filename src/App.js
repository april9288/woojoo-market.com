import React, { useContext } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import { MasterContext } from './Context';

import Public from './pages/Public';
import Login from './pages/Login';
import Feed from './pages/Feed';

const App = () => {
	const [auth] = useContext(MasterContext);
	console.log('App : ', auth);

	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Public} />
				<Route exact path='/login' component={Login} />
				<Route
					exact
					path='/feed'
					render={() => (auth.login ? <Feed /> : <Redirect to='/' />)}
				/>
			</Switch>
		</Router>
	);
};

export default App;

// console.log('local stroage login : ', localStorage.getItem('login'));

// if (localStorage.getItem('login')) {
// 	return <Redirect to='/feed' />;
// }
