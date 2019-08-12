import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavComponent = styled.section`
    background: #d93c7cfc;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2rem;
    align-items: center;
`;

const Logo = styled.p`
    margin: 0;
    font-size: 2rem;
    a {
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
`;

const LoginButton = styled.section`
    background: transparent;
    display: flex;
    font-size: 1.2rem;

    a {
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
`;

const Divider = styled.section`
    border-left: 3px solid white;
    margin: 0 1rem;
`;

const Nav = ({ pathname }) => {
    return (
        <NavComponent>
            <Logo>
                <Link to="/">WooJoo Market</Link>
            </Logo>
            <LoginButton>
                {pathname === '/login' ? (
                    <Link to="/signup">Sign Up</Link>
                ) : pathname === '/signup' ? (
                    <Link to="/login">Log In</Link>
                ) : (
                    <Fragment>
                        <Link to="/login">Log In</Link>
                        <Divider />
                        <Link to="/signup">Sign Up</Link>
                    </Fragment>
                )}
            </LoginButton>
        </NavComponent>
    );
};

export default Nav;
