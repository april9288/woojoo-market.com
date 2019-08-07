import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavComponent = styled.section`
	background: #845ec2;
	display: flex;
	justify-content: space-between;
	padding: 1rem;
`;

const Logo = styled.p`
	margin: 0;
	padding: 0;
	font-size: 2rem;
	color: white;
`;

const LoginButton = styled.button`
	background: transparent;
	border: 2px solid white;
	font-size: 1.5rem;
	cursor: pointer;

	&:hover {
		background: #d65db1;
	}

	a {
		color: white;
		text-decoration: none;
	}
`;

const Nav = () => {
	return (
		<NavComponent>
			<Logo>WooJoo Market</Logo>
			<LoginButton>
				<Link to='/login'>Log in</Link>
			</LoginButton>
		</NavComponent>
	);
};

export default Nav;
