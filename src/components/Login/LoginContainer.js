import React from 'react';
import styled from 'styled-components';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const FormSection = styled.section`
	display: flex;
	flex-direction: column;
`;

const LoginFormTag = styled.form`
	display: inline-grid;
	width: 30rem;

	input {
		margin: 0.5rem 0;
		padding: 0.5rem;
	}
`;

const LoginButton = styled.button`
	margin: 1rem 0;
	background: transparent;
	border: 2px solid rgba(0, 0, 0, 0.8);
	padding: 1rem;
	cursor: pointer;
	font-size: 1.5rem;
	padding: 1rem;
	color: rgba(0, 0, 0, 0.8);

	&:hover {
		background: #d65db1;
	}
`;

const LoginText = styled.h1`
	text-align: center;
	font-size: 3rem;
	color: rgba(0, 0, 0, 0.8);
`;

const LoginContainer = () => (
	<FormSection>
		<LoginForm
			LoginFormTag={LoginFormTag}
			LoginButton={LoginButton}
			LoginText={LoginText}
		/>
		<SignupForm
			LoginFormTag={LoginFormTag}
			LoginButton={LoginButton}
			LoginText={LoginText}
		/>
	</FormSection>
);

export default LoginContainer;
