import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { MasterContext } from '../Context';
import { ApiUserAuth } from '../api/auth';

const Login = () => {
	const [auth, setAuth] = useContext(MasterContext);

	console.log('Login page : ', auth);

	if (auth.login) {
		return <Redirect to='/feed' />;
	}

	return (
		<section>
			<h1>Login Page!!!</h1>
			<button onClick={() => ApiUserAuth(axios, setAuth)}>Login</button>
		</section>
	);
};

export default Login;
