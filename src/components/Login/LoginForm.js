import React, { useState, useContext } from 'react';
import axios from 'axios';

import { MasterContext } from '../../Context';
import { ApiUserLogin } from '../../api/auth';

const LoginForm = ({ LoginFormTag, LoginButton, LoginText }) => {
	const [auth, setAuth] = useContext(MasterContext);

	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setUserPassword] = useState('');

	const handleLogin = e => {
		e.preventDefault();
		ApiUserLogin(axios, setAuth, userEmail, userPassword);
		setUserPassword('');
	};

	return (
		<LoginFormTag onSubmit={handleLogin}>
			<LoginText>Log In</LoginText>
			User Email :{' '}
			<input type='email' onChange={e => setUserEmail(e.target.value)} />
			User Password :{' '}
			<input
				type='password'
				value={userPassword}
				onChange={e => setUserPassword(e.target.value)}
			/>
			<LoginButton type='submit'>Log in</LoginButton>
		</LoginFormTag>
	);
};

export default LoginForm;
