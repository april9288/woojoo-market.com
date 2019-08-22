import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import { AppContext } from '../../context/appContext';
import { ApiAuthentication } from '../../api/auth';

import { StyledGuestLogin } from './styles';

const LoginForm = ({
    StyledForm,
    StyledButton,
    StyledText,
    StyledForgotPasswordButton,
    StyledLink,
    StyledWarning
}) => {
    // after submitting log in form, will check if the user can login or not.
    const [auth, setAuth] = useContext(AppContext);
    const { login, error } = auth;

    if (login === true) {
        return <Redirect to="/feed" />;
    }

    const defaultUser = {
        email: '',
        password: ''
    };

    const [user, setUser] = useState(defaultUser);
    const { email, password } = user;

    const handleLogin = e => {
        e.preventDefault();
        ApiAuthentication(
            axios,
            'post',
            '/api/login',
            { email, password },
            auth,
            setAuth,
            'LOGIN_ERROR'
        );
    };

    const GuestLogin = () => {
        ApiAuthentication(
            axios,
            'post',
            '/api/login',
            {
                email: 'kira@g.com',
                password: 'abc'
            },
            auth,
            setAuth,
            'LOGIN_ERROR'
        );
    };

    return (
        <StyledForm onSubmit={handleLogin}>
            <StyledText>Log In</StyledText>
            <input
                type="email"
                value={email}
                onChange={e =>
                    setUser({ ...user, email: e.target.value.trim() })
                }
                placeholder="Email"
                required
            />
            {error === 'LOGIN_ERROR' && (
                <StyledWarning>Login Failed</StyledWarning>
            )}
            <input
                type="password"
                value={password}
                onChange={e =>
                    setUser({ ...user, password: e.target.value.trim() })
                }
                placeholder="Password"
                required
            />
            {error === 'LOGIN_ERROR' && (
                <StyledWarning>Login Failed</StyledWarning>
            )}
            <StyledButton type="submit">Log in</StyledButton>
            <StyledGuestLogin onClick={GuestLogin}>
                <button type="button">Login as Guest</button>
            </StyledGuestLogin>

            <StyledForgotPasswordButton>
                <Link to="/forgotPassword">Forgot Password?</Link>
            </StyledForgotPasswordButton>

            <StyledLink>
                <p>Don&apos;t have an account? </p>
                <Link to="/signup">Sign up</Link>
            </StyledLink>
        </StyledForm>
    );
};

export default LoginForm;
