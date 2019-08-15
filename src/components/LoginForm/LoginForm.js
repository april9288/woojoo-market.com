import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import { AppContext } from '../../context/appContext';
import { ApiAuthentication } from '../../api/auth';

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

    if (login) {
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
            {error && <StyledWarning>Login Failed</StyledWarning>}
            <input
                type="password"
                value={password}
                onChange={e =>
                    setUser({ ...user, password: e.target.value.trim() })
                }
                placeholder="Password"
                required
            />
            {error && <StyledWarning>Login Failed</StyledWarning>}
            <StyledButton type="submit">Log in</StyledButton>
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
