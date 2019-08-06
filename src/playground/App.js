import React, { useContext } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect
} from 'react-router-dom';

import { AuthContext } from './Context';

const Home = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/login'>Log in</Link>
				</li>
			</ul>
		</div>
	);
};

const Login = () => {
	return (
		<section>
			<Link to='/main'>Main</Link>
		</section>
	);
};

const Main = () => {
	return <h1>Welcome to WZ Market!</h1>;
};

const App = () => {
	const [auth] = useContext(AuthContext);
	console.log(auth.login);

	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route
					exact
					path='/main'
					render={() => (auth.login ? <Main /> : <Redirect to='/' />)}
				/>
			</Switch>
		</Router>
	);
};

export default App;
