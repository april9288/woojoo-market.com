import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { MasterContext } from '../Context';
import LoginContainer from '../components/Login/LoginContainer';

const LoginSection = styled.section`
	height: 100vh;
	background: #fef6ff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ImageSection = styled.img`
	height: 80vh;
	margin: 5rem;
`;

const Login = () => {
	const [auth] = useContext(MasterContext);

	console.log('Login page : ', auth);

	if (auth.login) {
		return <Redirect to='/feed' />;
	}

	return (
		<LoginSection>
			<ImageSection
				alt='login'
				src='https://woojoo.s3-us-west-1.amazonaws.com/login.webp'
			></ImageSection>
			<LoginContainer />
		</LoginSection>
	);
};

export default Login;
