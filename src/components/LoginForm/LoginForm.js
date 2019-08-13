import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { AppContext } from '../../context/appContext';
import { ApiUserLogin } from '../../api/auth';

const LoginForm = ({
    StyledForm,
    StyledButton,
    StyledText,
    StyledForgotPasswordButton,
    StyledLink
}) => {
    const [auth, setAuth] = useContext(AppContext);

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        ApiUserLogin(axios, setAuth, userEmail, userPassword);
        setUserPassword('');
    };

    return (
        <StyledForm onSubmit={handleLogin}>
            <StyledText>Log In</StyledText>
            <input
                type="email"
                onChange={e => setUserEmail(e.target.value.trim())}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={userPassword}
                onChange={e => setUserPassword(e.target.value.trim())}
                placeholder="Password"
                required
            />
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
