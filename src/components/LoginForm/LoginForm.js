import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import { AppContext } from '../../context/appContext';
import { ApiUserLogin } from '../../api/auth';

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
    if (auth.login) {
        return <Redirect to="/feed" />;
    }

    const [loginStatus, setLoginStatus] = useState(true);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);

    // after making a request to server, if there's the duplicated email, then it'll reset all the inputs
    if (!loginStatus) {
        setLoginFailed(true);
        setUserEmail('');
        setUserPassword('');
        setLoginStatus(true);
    }

    const handleLogin = e => {
        e.preventDefault();
        ApiUserLogin(axios, setAuth, userEmail, userPassword, setLoginStatus);
    };

    return (
        <StyledForm onSubmit={handleLogin}>
            <StyledText>Log In</StyledText>
            <input
                type="email"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value.trim())}
                placeholder="Email"
                required
            />
            {loginFailed && <StyledWarning>Login Failed</StyledWarning>}
            <input
                type="password"
                value={userPassword}
                onChange={e => setUserPassword(e.target.value.trim())}
                placeholder="Password"
                required
            />
            {loginFailed && <StyledWarning>Login Failed</StyledWarning>}
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
