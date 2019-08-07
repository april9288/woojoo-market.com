import React, { useState, useContext } from 'react';
import axios from 'axios';

import { MasterContext } from '../../Context';
import { ApiUserSignup } from '../../api/auth';

const SignupForm = ({ LoginFormTag, LoginButton, LoginText }) => {
	const [auth, setAuth] = useContext(MasterContext);

	const [signupUserEmail, setSignupUserEmail] = useState('');
	const [signupUserPassword, setSignupUserPassword] = useState('');
	const [signupUserPassword2, setSignupUserPassword2] = useState('');

	const handleSignup = e => {
		e.preventDefault();
		if (
			signupUserPassword === signupUserPassword2 &&
			signupUserPassword.length > 0
		) {
			ApiUserSignup(axios, setAuth, signupUserEmail, signupUserPassword);
		} else {
			setSignupUserPassword('');
			setSignupUserPassword2('');
		}
	};

	return (
		<LoginFormTag onSubmit={handleSignup}>
			<LoginText>Sign Up</LoginText>
			Email :{' '}
			<input type='email' onChange={e => setSignupUserEmail(e.target.value)} />
			Password :{' '}
			<input
				type='password'
				value={signupUserPassword}
				onChange={e => setSignupUserPassword(e.target.value)}
			/>
			Password Confirm :{' '}
			<input
				type='password'
				value={signupUserPassword2}
				onChange={e => setSignupUserPassword2(e.target.value)}
			/>
			{signupUserPassword !== signupUserPassword2 &&
				signupUserPassword2.length > 0 &&
				'password do not match'}
			<LoginButton type='submit'>Sign up</LoginButton>
		</LoginFormTag>
	);
};

export default SignupForm;
