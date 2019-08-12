import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { MasterContext } from '../../Context';
import { ApiUserLogin } from '../../api/auth';

const LoginForm = ({
    LoginFormTag,
    LoginButton,
    LoginText,
    ForgotPassword,
    LoginLink
}) => {
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
            <LoginButton type="submit">Log in</LoginButton>
            <ForgotPassword>
                <Link to="/forgotPassword">Forgot Password?</Link>
            </ForgotPassword>
            <LoginLink>
                <p>Don&apos;t have an account? </p>
                <Link to="/signup">Sign up</Link>
            </LoginLink>
        </LoginFormTag>
    );
};

export default LoginForm;
